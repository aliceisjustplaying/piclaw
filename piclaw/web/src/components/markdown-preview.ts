// @ts-nocheck
/**
 * markdown-preview.ts — Live markdown preview panel for the editor.
 *
 * Renders below the CodeMirror editor when activated via tab context menu.
 * Uses the same renderMarkdown() pipeline as the timeline so output is
 * visually consistent. Updates on a debounced timer to avoid jank.
 */

import { html, useCallback, useEffect, useRef, useState } from '../vendor/preact-htm.js';
import { renderMarkdown, renderMermaidDiagrams } from '../markdown.js';

const DEBOUNCE_MS = 300;

/**
 * MarkdownPreview component.
 *
 * @param {Object} props
 * @param {() => string|undefined} props.getContent - Returns current editor content.
 * @param {string} props.path - File path (for display).
 * @param {() => void} props.onClose - Close the preview.
 */
export function MarkdownPreview({ getContent, path, onClose }) {
    const [html_content, setHtmlContent] = useState('');
    const previewRef = useRef(null);
    const timerRef = useRef(null);
    const contentRef = useRef('');

    const updatePreview = useCallback(() => {
        const text = getContent?.() || '';
        if (text === contentRef.current && html_content) return;
        contentRef.current = text;

        try {
            const rendered = renderMarkdown(text, null, { sanitize: false });
            setHtmlContent(rendered);
        } catch {
            setHtmlContent('<p style="color:var(--text-secondary)">Preview unavailable</p>');
        }
    }, [getContent]);

    // Initial render + poll for changes (editor has no onChange callback to hook)
    useEffect(() => {
        updatePreview();
        const interval = setInterval(updatePreview, DEBOUNCE_MS);
        return () => clearInterval(interval);
    }, [updatePreview]);

    // Render mermaid diagrams after HTML update
    useEffect(() => {
        if (previewRef.current && html_content) {
            renderMermaidDiagrams(previewRef.current).catch(() => {});
        }
    }, [html_content]);

    return html`
        <div class="md-preview-panel">
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${onClose} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${previewRef}
                dangerouslySetInnerHTML=${{ __html: html_content }}
            />
        </div>
    `;
}
