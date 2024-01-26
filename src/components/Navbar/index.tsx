import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

import { useNavMenuContext } from '../../contexts/NavMenuContext';
import DarkModeToggle from './DarkModeToggle';

import '../../index.css';

export default function Navbar() {
    const { isNavMenuOpen, toggleNavMenu } = useNavMenuContext(); 

    return (
        <header className="relative z-10 p-2 md:px-6">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img className="h-16" src={Logo} alt="logo" />
                </Link>
                <nav
                    className={`flex md:block w-full md:w-auto flex-col justify-center items-center text-center ${isNavMenuOpen ? "fixed top-0 left-0 h-lvh not(dark):bg-white/50 dark:bg-[var(--bg-dark)]/50 backdrop-blur-md" : "hidden"}`}
                >
                    <ul className="flex flex-col md:flex-row text-center justify-center md:justify-end gap-8 md:gap-16 md:mr-8">
                        <li>
                            <NavLink className="text-[1.5rem] text-[var(--primary)] dark:text-[var(--primary-dark)] hover:text-[var(--secondary)] dark:hover:text-[var(--secondary)]" to="/" onClick={toggleNavMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-[1.5rem] text-[var(--primary)] dark:text-[var(--primary-dark)] hover:text-[var(--secondary)] dark:hover:text-[var(--secondary)]" to="/projects" onClick={toggleNavMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-[1.5rem] text-[var(--primary)] dark:text-[var(--primary-dark)] hover:text-[var(--secondary)] dark:hover:text-[var(--secondary)]" to="/about" onClick={toggleNavMenu}>
                                About Me
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center px-2 gap-8">
                    <DarkModeToggle />
                    <button
                        className="flex md:hidden flex-col items-center justify-between focus:outline-none text-[var(--primary)] dark:text-[var(--primary-dark)]"
                        onClick={toggleNavMenu}
                    >
                        <span className="sr-only">Open main nav</span>
                        <span
                            aria-hidden="true"
                            className={`h-1 w-12 bg-current transform transition duration-500 ease-in-out rounded ${isNavMenuOpen ? "translate-y-[12px] rotate-45" : " -translate-y-2"}`}
                        ></span>
                        <span
                            aria-hidden="true"
                            className={`h-1 w-12 bg-current transform transition duration-500 ease-in-out rounded ${isNavMenuOpen ? "opacity-0" : ""}`}
                        ></span>
                        <span
                            aria-hidden="true"
                            className={`h-1 w-12 bg-current transform transition duration-500 ease-in-out rounded ${isNavMenuOpen ? " -translate-y-[12px] -rotate-45" : " translate-y-2"}`}
                        ></span>
                    </button>
                </div>
            </div>
        </header>
    );
};