// @ts-nocheck
/**
 * mindmap-pane.ts — WebPaneExtension for .mindmap.yaml files.
 *
 * Adapts the mindmap editor from the VS Code extension to piclaw's pane system.
 * The core D3/SVG renderer is loaded from the vendored mindmap bundle.
 * File I/O uses piclaw's workspace API instead of VS Code's custom editor API.
 */

import type { PaneCapability, PaneContext, PaneInstance, WebPaneExtension } from './pane-types.js';

const MINDMAP_EXTENSION = /\.mindmap\.ya?ml$/i;

/** Load a script globally if not already loaded. */
function ensureScript(src: string): Promise<void> {
    if (document.querySelector(`script[src="${src}"]`)) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const el = document.createElement('script');
        el.src = src;
        el.onload = () => resolve();
        el.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.head.appendChild(el);
    });
}

/** Load a stylesheet if not already loaded. */
function ensureStylesheet(href: string): void {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = href;
    document.head.appendChild(el);
}

// ── Preview card (workspace browser) ────────────────────────────

class MindmapPreviewCard implements PaneInstance {
    private container: HTMLElement;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        const filePath = context.path || '';
        const name = filePath.split('/').pop() || 'mindmap';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);';
        wrapper.innerHTML = `
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">🧠</div>
                    <div style="font-size:14px;color:var(--text-primary);">${name}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `;
        container.appendChild(wrapper);

        wrapper.querySelector('#mm-open-tab')?.addEventListener('click', () => {
            container.dispatchEvent(new CustomEvent('mindmap:open-tab', {
                bubbles: true,
                detail: { path: filePath },
            }));
        });
    }

    getContent() { return undefined; }
    isDirty() { return false; }
    focus() {}
    resize() {}
    dispose() { this.container.innerHTML = ''; }
}

// ── Full editor (tab pane) ──────────────────────────────────────

class MindmapEditorInstance implements PaneInstance {
    private container: HTMLElement;
    private filePath: string;
    private dirty = false;
    private dirtyCallback: ((dirty: boolean) => void) | null = null;
    private saveCallback: ((content: string) => void) | null = null;
    private disposed = false;
    private mindmapEl: HTMLElement | null = null;

    constructor(container: HTMLElement, context: PaneContext) {
        this.container = container;
        this.filePath = context.path || '';

        this.init(context.content || '');
    }

    private async init(initialContent: string) {
        // Load vendor deps
        ensureStylesheet('/static/css/mindmap.css');
        await Promise.all([
            ensureScript('/static/js/vendor/d3-mindmap.min.js'),
            ensureScript('/static/js/vendor/js-yaml.min.js'),
        ]);

        // Create the mindmap container
        this.mindmapEl = document.createElement('div');
        this.mindmapEl.id = 'mindmap-container';
        this.mindmapEl.style.cssText = 'width:100%;height:100%;overflow:hidden;position:relative;';
        this.container.appendChild(this.mindmapEl);

        // Detect theme
        const isDark = document.body.classList.contains('dark') ||
            getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim().startsWith('#1') ||
            getComputedStyle(document.documentElement).getPropertyValue('--bg-primary').trim().startsWith('#0');
        if (!isDark) {
            this.mindmapEl.classList.add('light');
        }

        // Resolve image paths relative to the mindmap file
        const fileDir = this.filePath.replace(/\/[^/]+$/, '') || '/';

        // Initialize the mindmap renderer
        // The vendored mindmap.ts expects a global `acquireVsCodeApi` — we shim it
        const self = this;
        const fakeVscode = {
            postMessage(msg: any) {
                switch (msg.type) {
                    case 'edit':
                        self.dirty = true;
                        self.dirtyCallback?.(true);
                        self.saveCallback?.(msg.content);
                        // Auto-save via workspace API
                        self.saveToWorkspace(msg.content);
                        break;
                    case 'error':
                        console.error('[mindmap]', msg.text);
                        break;
                    case 'openLink':
                        window.open(msg.url, '_blank', 'noopener,noreferrer');
                        break;
                    case 'resolveImagePath':
                        // Resolve relative to the mindmap file's directory
                        const resolved = msg.path.startsWith('data:') || msg.path.startsWith('http')
                            ? msg.path
                            : `/workspace/raw?path=${encodeURIComponent(fileDir + '/' + msg.path)}`;
                        window.dispatchEvent(new MessageEvent('message', {
                            data: { type: 'imageResolved', originalPath: msg.path, resolvedUri: resolved }
                        }));
                        break;
                    case 'ready':
                        // Send initial content
                        window.dispatchEvent(new MessageEvent('message', {
                            data: { type: 'update', content: initialContent }
                        }));
                        // Send theme
                        window.dispatchEvent(new MessageEvent('message', {
                            data: { type: 'setTheme', theme: isDark ? 'dark' : 'light' }
                        }));
                        break;
                }
            },
            getState() { return null; },
            setState() {},
        };

        // Inject the shim and load the mindmap renderer
        (window as any).__mindmapVscodeShim = fakeVscode;

        // Load and execute the mindmap renderer with the shim
        await this.loadMindmapRenderer();
    }

    private async loadMindmapRenderer() {
        // The mindmap.ts source expects `acquireVsCodeApi` as a global.
        // We dynamically create a script that defines it, then load the bundled mindmap code.
        // For now, we inline-load the pre-built mindmap bundle.
        const bundlePath = '/static/js/vendor/mindmap-editor.js';
        try {
            // Set up the shim before the script loads
            (window as any).acquireVsCodeApi = () => (window as any).__mindmapVscodeShim;
            await ensureScript(bundlePath);
        } catch (err) {
            console.error('[mindmap] Failed to load mindmap renderer:', err);
            if (this.mindmapEl) {
                this.mindmapEl.innerHTML = `<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor. Bundle not found at ${bundlePath}.</div>`;
            }
        }
    }

    private async saveToWorkspace(yamlContent: string) {
        try {
            await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'text/yaml' },
                body: yamlContent,
            });
            this.dirty = false;
            this.dirtyCallback?.(false);
        } catch (err) {
            console.error('[mindmap] Save failed:', err);
        }
    }

    getContent(): string | undefined {
        return undefined; // Content is managed by the mindmap renderer
    }

    isDirty(): boolean {
        return this.dirty;
    }

    setContent(content: string, _mtime: string): void {
        // Host reloaded the file — update the renderer
        window.dispatchEvent(new MessageEvent('message', {
            data: { type: 'update', content }
        }));
        this.dirty = false;
        this.dirtyCallback?.(false);
    }

    focus(): void {
        this.mindmapEl?.focus();
    }

    resize(): void {
        // The D3 renderer handles resize via window resize events
        window.dispatchEvent(new Event('resize'));
    }

    onDirtyChange(cb: (dirty: boolean) => void): void {
        this.dirtyCallback = cb;
    }

    onSaveRequest(cb: (content: string) => void): void {
        this.saveCallback = cb;
    }

    dispose(): void {
        if (this.disposed) return;
        this.disposed = true;
        // Clean up the shim
        delete (window as any).__mindmapVscodeShim;
        delete (window as any).acquireVsCodeApi;
        this.container.innerHTML = '';
    }
}

// ── Extension ───────────────────────────────────────────────────

export const mindmapPaneExtension: WebPaneExtension = {
    id: 'mindmap-editor',
    label: 'Mindmap Editor',
    icon: 'mindmap',
    capabilities: ['edit', 'preview'] as PaneCapability[],
    placement: 'tabs',

    canHandle(context: PaneContext): boolean | number {
        const path = context?.path || '';
        if (!MINDMAP_EXTENSION.test(path)) return false;
        return 50; // Higher than editor (1)
    },

    mount(container: HTMLElement, context: PaneContext): PaneInstance {
        if (context?.mode === 'view') {
            return new MindmapPreviewCard(container, context);
        }
        return new MindmapEditorInstance(container, context);
    },
};
