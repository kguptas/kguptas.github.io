import { Component, useMemo } from "react";

// --- Proper Error Boundary using class component ---
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return this.props.fallback(this.state.error);
        }
        return this.props.children;
    }
}

// --- Robust WebGL detection (sync) ---
function detectWebGL() {
    try {
        const c = document.createElement("canvas");
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
    const supported = useMemo(() => detectWebGL(), []);

    if (!supported) {
        return (
            <div style={{ fontFamily: "system-ui", lineHeight: 1.6, padding: 24, color: "white"}}>
                <h2 style={{ margin: 0 }}>⚠️ <b>3D view not available</b></h2>
                <p>
                    WebGL seems disabled or unsupported on your browser. Try Safari or try changing your Chrome browser settings (toggle on "Use graphics acceleration when available" in system settings).
                </p>
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