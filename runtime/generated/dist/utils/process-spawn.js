export function shouldDetachChildProcess(platform = process.platform) {
    return platform !== "win32";
}
export function buildSubprocessExecutionHint(platform = process.platform) {
    if (platform === "win32") {
        return "On Windows, Piclaw keeps shell-like child processes attached (detached=false) so stdout/stderr remain capturable; abort and shutdown still use taskkill-based tree cleanup.";
    }
    return "On Unix-like hosts, Piclaw runs shell-like child processes in detached process groups so abort and shutdown can kill the full process tree cleanly.";
}
