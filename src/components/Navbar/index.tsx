import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faEnvelope, faGears, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logo.png';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });
    
    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
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
                                {/* <FontAwesomeIcon icon={faHome} color="#000" /> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" onClick={menuToggleHandler}>
                                Projects
                                {/* <FontAwesomeIcon icon={faGears} color="#000" /> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-me" onClick={menuToggleHandler}>
                                About Me
                                {/* <FontAwesomeIcon icon={faUser} color="#000" /> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" onClick={menuToggleHandler}>
                                Contact
                                {/* <FontAwesomeIcon icon={faEnvelope} color="#000" /> */}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
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