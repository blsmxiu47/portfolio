import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logo.png';
import './index.scss';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        setMenuOpen(false); // Set initial state after component mounts
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
        <header className="header">
            <div className="header__content">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <nav
                    className={`${"header__content__nav"} ${
                        menuOpen && size.width < 768 ? `${"isMenu"}` : ""
                    }`}
                >
                    <ul>
                        <li>
                            <NavLink to="/" onClick={menuToggleHandler}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" onClick={menuToggleHandler}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" onClick={menuToggleHandler}>
                                About Me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={menuToggleHandler}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <DarkModeToggle />
                <div className="header__content__toggle">
                        {!menuOpen ? (
                            <FontAwesomeIcon
                                onClick={menuToggleHandler}
                                icon={faBars}
                                size="3x"
                            />
                        ) : (
                            <FontAwesomeIcon
                                onClick={menuToggleHandler}
                                icon={faXmark}
                                size="3x"
                            />
                        )}
                </div>
            </div>
        </header>
    );
}

export default Navbar;