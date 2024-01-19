import { useEffect, useState } from 'react';

import '../../../index.css';

interface PulseProps {
    children: React.ReactNode;
    delay: number;
    sequentialDelay: number;
}

const Pulse: React.FC<PulseProps> = ({ children, delay, sequentialDelay }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, delay + sequentialDelay);

        return () => {
            clearTimeout(timer);
        };
    }, [delay, sequentialDelay]);

    return (
        <div className={`${visible ? "block" : "hidden"}`}>
            {children}
        </div>
    );
};

export default Pulse;