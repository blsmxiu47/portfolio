import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
    return (
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
    )
}

export default SocialLinks;