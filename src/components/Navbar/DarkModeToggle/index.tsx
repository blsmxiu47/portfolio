import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const DarkModeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState(true);

    // Function to handle the dark mode toggle and set the theme for the whole app
    const handleThemeToggle = (isDark: boolean) => {
        setIsDark(!isDark);
        const root = document.documentElement;
        const theme = isDark ? 'light' : 'dark';
        root.classList.remove(isDark ? 'dark' : 'light');
        root.classList.add(theme);
        localStorage.setItem('color-theme', theme);
    };

    return (
        <button
            id="theme-toggle"
            type="button"
            title="Enable dark mode"
            aria-label="dark mode"
            onClick={() => handleThemeToggle(isDark)}
        >
            <FontAwesomeIcon className="text-[var(--primary)]" icon={faCircleHalfStroke} size="3x" />
        </button>
    )
};

export default DarkModeToggle;