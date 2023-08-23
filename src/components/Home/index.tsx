import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="hero">
                <h1>Hello world! <span role="img" aria-label="wave">👋</span></h1>
                <h2>I'm Wes. I make stuff.</h2>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/blsmxiu47"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="social-icon"
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
                                className="social-icon"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home;