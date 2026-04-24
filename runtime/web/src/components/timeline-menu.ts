// @ts-nocheck
/**
 * timeline-menu.ts — Single hamburger menu, position:fixed.
 * Tracks the .container element's position to stay aligned with the chat area.
 */

import { html, useState, useEffect, useRef, useCallback, useLayoutEffect, render } from '../vendor/preact-htm.js';

export function TimelineMenu({
    workspaceOpen,
    toggleWorkspace,
    onOpenTerminalTab,
    onOpenVncTab,
    onToggleTerminal,
    terminalVisible,
}) {
    const [open, setOpen] = useState(false);
    const [pos, setPos] = useState({ top: 8, right: 12 });
    const menuRef = useRef(null);
    const btnRef = useRef(null);
    const portalRef = useRef(null);

    // Create portal host once
    useEffect(() => {
        if (typeof document === 'undefined') return;
        const host = document.createElement('div');
        host.className = 'timeline-menu-portal in-chat';
        document.body.appendChild(host);
        portalRef.current = host;
        return () => { host.remove(); portalRef.current = null; };
    }, []);

    // Track container position to align the button
    useEffect(() => {
        const update = () => {
            const container = document.querySelector('.container');
            const shell = document.querySelector('.app-shell');
            if (workspaceOpen) {
                // Position over the workspace header area
                const sidebar = document.querySelector('.workspace-sidebar');
                if (sidebar) {
                    const r = sidebar.getBoundingClientRect();
                    setPos({ top: r.top + 8, left: r.left + 8, right: undefined });
                }
            } else {
                // Workspace closed: top-left, where the workspace header button would be
                setPos({ top: 8, left: 8, right: undefined });
            }
        };
        update();
        const observer = new ResizeObserver(update);
        const container = document.querySelector('.container');
        const sidebar = document.querySelector('.workspace-sidebar');
        if (container) observer.observe(container);
        if (sidebar) observer.observe(sidebar);
        window.addEventListener('resize', update);
        return () => { observer.disconnect(); window.removeEventListener('resize', update); };
    }, [workspaceOpen]);

    // Update portal class
    useEffect(() => {
        if (portalRef.current) {
            portalRef.current.className = `timeline-menu-portal ${workspaceOpen ? 'in-workspace' : 'in-chat'}`;
        }
    }, [workspaceOpen]);

    // Update portal position
    useEffect(() => {
        if (!portalRef.current) return;
        const s = portalRef.current.style;
        s.top = `${pos.top}px`;
        if (pos.right !== undefined) { s.right = `${pos.right}px`; s.left = 'auto'; }
        else if (pos.left !== undefined) { s.left = `${pos.left}px`; s.right = 'auto'; }
    }, [pos]);

    // Close on outside click
    useEffect(() => {
        if (!open) return;
        const onClick = (e) => {
            if (menuRef.current?.contains(e.target)) return;
            if (btnRef.current?.contains(e.target)) return;
            setOpen(false);
        };
        document.addEventListener('mousedown', onClick, true);
        return () => document.removeEventListener('mousedown', onClick, true);
    }, [open]);

    useEffect(() => {
        if (!open) return;
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    useEffect(() => { setOpen(false); }, [workspaceOpen]);

    const run = useCallback((fn) => { setOpen(false); fn?.(); }, []);

    const content = html`
        <button ref=${btnRef} class=${`timeline-menu-btn${open ? ' active' : ''}`}
            onClick=${() => setOpen(v => !v)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${open ? 'true' : 'false'}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${open && html`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${menuRef} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${() => run(toggleWorkspace)}>
                    ${workspaceOpen ? 'Hide workspace' : 'Show workspace'}
                </button>
                ${(onOpenTerminalTab || onOpenVncTab || onToggleTerminal) && html`<div class="workspace-menu-separator"></div>`}
                ${onOpenTerminalTab && html`<button class="workspace-menu-item" role="menuitem" onClick=${() => run(onOpenTerminalTab)}>Open terminal in tab</button>`}
                ${onOpenVncTab && html`<button class="workspace-menu-item" role="menuitem" onClick=${() => run(onOpenVncTab)}>Open VNC in tab</button>`}
                ${onToggleTerminal && html`<button class="workspace-menu-item" role="menuitem" onClick=${() => run(onToggleTerminal)}>${terminalVisible ? 'Hide terminal dock' : 'Show terminal dock'}</button>`}
                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${() => run(() => window.dispatchEvent(new CustomEvent('piclaw:open-settings')))}>Settings</button>
            </div>
        `}
    `;

    useLayoutEffect(() => {
        if (portalRef.current) render(content, portalRef.current);
    });

    return null;
}
