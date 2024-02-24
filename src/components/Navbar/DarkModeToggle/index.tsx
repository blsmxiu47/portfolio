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
            className="rounded focus:outline-none focus-visible:ring-1 focus:ring-offset-1 focus:ring-offset-[var(--primary)] focus:ring-[var(--primary)] dark:focus:ring-offset-[var(--primary-dark)] dark:focus:ring-[var(--primary-dark)]"
            onClick={() => setIsDark(!isDark)}
        >
            <FontAwesomeIcon className="block size-6 text-[var(--primary)] dark:text-[var(--primary-dark)] hover:text-[var(--secondary)] dark:hover:text-[var(--secondary)]" icon={faCircleHalfStroke} />
        </button>
    )
};