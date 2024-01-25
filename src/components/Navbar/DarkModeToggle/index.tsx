import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import '../../../index.css';

export default function DarkModeToggle() {
    const [colorTheme, setTheme] = useState(localStorage.getItem('color-theme'));
    const [isDark, setIsDark] = useState(colorTheme === 'dark');

    const handleThemeToggle = () => {
        setTheme(colorTheme);
        setIsDark(!isDark);
        const root = document.documentElement;
        const theme = isDark ? 'dark' : 'light';
        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(theme);
        localStorage.setItem('color-theme', theme);
    };

    return (
        <button
            id="theme-toggle"
            type="button"
            title="Enable dark mode"
            aria-label="dark mode"
            onClick={handleThemeToggle}
        >
            <FontAwesomeIcon className="size-6 text-[var(--primary)] dark:text-[var(--primary-dark)]" icon={faCircleHalfStroke} />
        </button>
    )
};