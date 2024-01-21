import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Logo from '../../assets/images/logo.png';

import DarkModeToggle from './DarkModeToggle';

import '../../index.css';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        setMenuOpen(false);
    }, []);
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    
    useEffect(() => {
        function handleResize () {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        handleResize();
        
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    return (
        <header className="px-6 md:px-12">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img className="h-32" src={Logo} alt="logo" />
                </Link>
                <nav
                    className={`flex md:block w-full md:w-auto flex-col justify-center items-center text-center ${menuOpen ? "fixed top-0 left-0 h-lvh backdrop-blur" : "hidden"}`}
                >
                    <ul className="flex flex-col md:flex-row text-center justify-center md:justify-end gap-8 md:gap-16 md:mr-8">
                        <li>
                            <NavLink className="text-[3rem] text-[var(--primary)]" to="/" onClick={menuToggleHandler}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-[3rem] text-[var(--primary)]" to="/projects" onClick={menuToggleHandler}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-[3rem] text-[var(--primary)]" to="/about" onClick={menuToggleHandler}>
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="text-[3rem] text-[var(--primary)]" to="/contact" onClick={menuToggleHandler}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center gap-8">
                    <DarkModeToggle />
                    <button
                        className="flex md:hidden flex-col items-center justify-between focus:outline-none text-[var(--primary)]"
                        onClick={menuToggleHandler}
                    >
                        <span className="sr-only">Open main nav</span>
                        <span
                            aria-hidden="true"
                            className={`h-1.5 w-16 bg-current transform transition duration-500 ease-in-out rounded ${menuOpen ? "translate-y-[10.6px] rotate-45" : " -translate-y-2"}`}
                        ></span>
                        <span
                            aria-hidden="true"
                            className={`h-1.5 w-16 bg-current transform transition duration-500 ease-in-out rounded ${menuOpen ? "opacity-0" : ""}`}
                        ></span>
                        <span
                            aria-hidden="true"
                            className={`h-1.5 w-16 bg-current transform transition duration-500 ease-in-out rounded ${menuOpen ? " -translate-y-[10.6px] -rotate-45" : " translate-y-2"}`}
                        ></span>
                    </button>
                </div>
            </div>
        </header>
    );
};