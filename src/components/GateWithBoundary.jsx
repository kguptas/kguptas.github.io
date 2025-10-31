import { useMemo, useState } from "react";

// --- Error Boundary to catch render/runtime errors in children ---
function ErrorBoundary({ children, fallback }) {
    const [error, setError] = useState(null);

    // Simple boundary using a try/catch render wrapper
    try {
        if (error) return fallback(error);
        return children;
    } catch (e) {
        setError(e);
        return fallback(e);
    }
}

// --- Robust WebGL detection (sync) ---
function detectWebGL() {
    try {
        const c = document.createElement("canvas");
        // Try WebGL2 first, then WebGL1
        const gl =
            c.getContext("webgl2") ||
            c.getContext("webgl") ||
            c.getContext("experimental-webgl");
        return !!gl;
    } catch {
        return false;
    }
}

export default function GateWithBoundary({ children }) {
    // Run once, synchronously (avoids showing App before we know)
    const supported = useMemo(() => detectWebGL(), []);

    if (!supported) {
        return (
            <div style={{ fontFamily: "system-ui", lineHeight: 1.6, padding: 24, color: "white"}}>
                <h2 style={{ margin: 0 }}>⚠️ <b>3D view not available</b></h2>
                <p>
                    WebGL seems disabled or unsupported on your browser. Try Safari or try changing your Chrome browser settings (toggle on "Use graphics acceleration when available" in system settings).
                </p>
                {/* Add a preview image or simple non-3D hero if you have one */}
                {/* <img src="/fallback/preview.jpg" style={{maxWidth:'100%'}} alt="" /> */}
            </div>
        );
    }

    return (
        <ErrorBoundary
            fallback={(err) => (
                <div style={{ fontFamily: "system-ui", lineHeight: 1.6, padding: 24, color: "white"}}>
                    <h2 style={{ margin: 0 }}>🚧 <b>Something went wrong</b></h2>
                    <p>The interactive view failed to start.</p>
                    <details style={{ whiteSpace: "pre-wrap", marginTop: 12 }}>
                        {String(err && (err.stack || err.message || err))}
                    </details>
                </div>
            )}
        >
            {children}
        </ErrorBoundary>
    );
}
