const liveToolSnapshotAgents = new WeakSet();
const liveToolSnapshotStates = new WeakMap();
const boundImmediateToolActivationSessions = new WeakSet();
function replaceArrayContents(target, next) {
    target.splice(0, target.length, ...next);
}
function ensureLiveToolSnapshot(agent) {
    if (!agent || typeof agent !== "object")
        return null;
    const agentObject = agent;
    const existing = liveToolSnapshotStates.get(agentObject);
    if (existing)
        return existing;
    const liveState = {
        tools: Array.isArray(agent.state?.tools) ? agent.state.tools : [],
    };
    if (typeof agent.createContextSnapshot === "function" && !liveToolSnapshotAgents.has(agentObject)) {
        const original = agent.createContextSnapshot.bind(agent);
        agent.createContextSnapshot = () => {
            const snapshot = original();
            return {
                ...snapshot,
                tools: liveState.tools,
            };
        };
        liveToolSnapshotAgents.add(agentObject);
    }
    liveToolSnapshotStates.set(agentObject, liveState);
    return liveState;
}
export function applyActiveToolsImmediately(session, toolNames) {
    const tools = [];
    const validToolNames = [];
    for (const name of toolNames) {
        const tool = session._toolRegistry.get(name);
        if (tool) {
            tools.push(tool);
            validToolNames.push(name);
        }
    }
    const liveState = ensureLiveToolSnapshot(session.agent);
    const currentTools = Array.isArray(session.agent?.state?.tools)
        ? session.agent.state.tools
        : undefined;
    if (liveState?.tools) {
        replaceArrayContents(liveState.tools, tools);
    }
    if (currentTools && currentTools !== liveState?.tools) {
        replaceArrayContents(currentTools, tools);
    }
    else if (!currentTools && typeof session.agent?.setTools === "function") {
        session.agent.setTools(tools);
    }
    session._baseSystemPrompt = session._rebuildSystemPrompt(validToolNames);
    if (session.agent?.state) {
        session.agent.state.systemPrompt = session._baseSystemPrompt;
    }
    if (typeof session.agent?.setSystemPrompt === "function") {
        session.agent.setSystemPrompt(session._baseSystemPrompt);
    }
}
export function bindImmediateToolActivation(session) {
    if (!session || typeof session !== "object")
        return;
    if (boundImmediateToolActivationSessions.has(session))
        return;
    const liveState = ensureLiveToolSnapshot(session.agent);
    const original = typeof session.setActiveToolsByName === "function"
        ? session.setActiveToolsByName.bind(session)
        : null;
    session.setActiveToolsByName = (toolNames) => {
        if (original) {
            original(toolNames);
            const nextTools = Array.isArray(session.agent?.state?.tools)
                ? session.agent.state.tools
                : [];
            if (liveState?.tools) {
                replaceArrayContents(liveState.tools, nextTools);
            }
            return;
        }
        applyActiveToolsImmediately(session, toolNames);
    };
    boundImmediateToolActivationSessions.add(session);
}
