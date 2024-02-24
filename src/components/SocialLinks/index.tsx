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
                    className="block rounded focus:outline-none focus-visible:ring-1 focus:ring-offset-1 focus:ring-offset-[var(--primary)] focus:ring-[var(--primary)] dark:focus:ring-offset-[var(--primary-dark)] dark:focus:ring-[var(--primary-dark)]"
                >
                    <FontAwesomeIcon
                        className="block size-6 sm:size-8 text-black dark:text-white"
                        icon={faGithub}
                    />
                </a>
            </li>
            <li className="p-4">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/wes-warriner/"
                    className="block rounded focus:outline-none focus-visible:ring-1 focus:ring-offset-1 focus:ring-offset-[var(--primary)] focus:ring-[var(--primary)] dark:focus:ring-offset-[var(--primary-dark)] dark:focus:ring-[var(--primary-dark)]"
                >
                    <FontAwesomeIcon
                        className="block size-6 sm:size-8 text-[#0A66C2] dark:text-white"
                        icon={faLinkedin}
                    />
                </a>
            </li>
        </ul>
    )
}