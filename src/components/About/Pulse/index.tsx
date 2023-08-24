import { useEffect, useState } from "react";

interface PulseProps {
    children: React.ReactNode;
    delay: number;
    sequentialDelay: number;
}

const Pulse: React.FC<PulseProps> = ({ children, delay, sequentialDelay }) => {
    const [visible, setVisible] = useState(false);
    console.log(delay + sequentialDelay);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setVisible(true);
        }, delay + sequentialDelay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [delay, sequentialDelay]);

    return (
        <div className={`pulse ${visible ? "visible" : ""}`}>
            {children}
        </div>
    );
};

export default Pulse;