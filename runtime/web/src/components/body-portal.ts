// @ts-nocheck
import { render, useEffect, useRef } from '../vendor/preact-htm.js';

export function BodyPortal({ children, className = '' }) {
    const hostRef = useRef(null);

    // Create the host div once on mount, remove on unmount
    useEffect(() => {
        if (typeof document === 'undefined') return undefined;
        const host = document.createElement('div');
        if (className) host.className = className;
        document.body.appendChild(host);
        hostRef.current = host;
        return () => {
            hostRef.current = null;
            try {
                render(null, host);
            } finally {
                host.remove();
            }
        };
    }, [className]);

    // Render children into the host div on every update
    useEffect(() => {
        const host = hostRef.current;
        if (!host) return;
        render(children, host);
    });

    return null;
}
