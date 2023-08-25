import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="hero">
                <h1 className="hello">Hello world!<span role="img" aria-label="wave">👋</span></h1>
                <h2>My name is <strong className="main-name">Wes (he/they)</strong>.</h2>
                <h2>I'm a software engineer.</h2>
                <h2>I make stuff.</h2>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/blsmxiu47"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                size="4x"
                                color="#000"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/wes-warriner/"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                size="4x"
                                color="#0A66C2"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;