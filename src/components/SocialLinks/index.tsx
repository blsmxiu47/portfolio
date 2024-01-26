import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function SocialLinks() {
    return (
        <ul className="flex justify-center m-2">
            <li className="p-4">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/blsmxiu47"
                >
                    <FontAwesomeIcon
                        className="size-6 sm:size-8 text-black dark:text-white"
                        icon={faGithub}
                    />
                </a>
            </li>
            <li className="p-4">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/wes-warriner/"
                >
                    <FontAwesomeIcon
                        className="size-6 sm:size-8 text-[#0A66C2] dark:text-white"
                        icon={faLinkedin}
                    />
                </a>
            </li>
        </ul>
    )
}