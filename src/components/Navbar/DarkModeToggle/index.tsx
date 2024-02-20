import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import '../../../index.css';

export default function DarkModeToggle() {
    const [colorTheme, setTheme] = useState(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    const [isDark, setIsDark] = useState(colorTheme === 'dark');

    useEffect(() => {
        setTheme(isDark ? 'dark' : 'light');
        const root = document.documentElement;
        const theme = isDark ? 'dark' : 'light';
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [isDark]);

    return (
        <button
            id="theme-toggle"
            type="button"
            title="Enable dark mode"
            aria-label="dark mode"
            onClick={() => setIsDark(!isDark)}
        >
            <FontAwesomeIcon className="size-6 text-[var(--primary)] dark:text-[var(--primary-dark)] hover:text-[var(--secondary)] dark:hover:text-[var(--secondary)]" icon={faCircleHalfStroke} />
        </button>
    )
};