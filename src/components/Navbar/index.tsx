import { Link, NavLink } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faGears, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logo.png';
import './index.scss';

const Navbar = () => {
    return (
        <header className="header">
            <div className="header__content">
                <Link to="/">
                    <img src={Logo} alt="logo" />
                </Link>
                <nav className="header__content__nav">
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                                {/* <FontAwesomeIcon icon={faHome} color="#000" /> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">
                                Projects
                                {/* <FontAwesomeIcon icon={faGears} color="#000" /> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-me">
                                About Me
                                {/* <FontAwesomeIcon icon={faUser} color="#000" /> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                Contact
                                {/* <FontAwesomeIcon icon={faEnvelope} color="#000" /> */}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;