import { ProjectCardProps } from '../../../lib/types';

const ProjectCard = ({
    title,
    summary,
    imageSrc,
    tags,
    githubLink
}: ProjectCardProps) => {
    return (
        <a
            className="relative group h-80 max-w-[16rem] justify-self-center flex flex-col justify-top mx-2 my-1 rounded-lg shadow-md hover:scale-110 transition duration-700 ease-in-out cursor:pointer bg-gray-100 dark:bg-gray-800 focus:outline-none focus-visible:ring-1 focus:ring-offset-1 focus:ring-offset-[var(--primary)] focus:ring-[var(--primary)] dark:focus:ring-offset-[var(--primary-dark)] dark:focus:ring-[var(--primary-dark)]"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg
                className="absolute z-[-5] bottom-0 left-0"
                viewBox="0 0 375 283"
                fill="none"
                style={{ opacity: 0.4 }}
            >
                <rect x="180" y="170" width="8" height="180" transform="rotate(-45)" fill="white" />
                <rect x="200" y="170" width="8" height="180" transform="rotate(-45)" fill="white" />
                <rect x="220" y="170" width="8" height="180" transform="rotate(-45)" fill="white" />
                <rect x="-140" y="130" width="8" height="180" transform="rotate(-45)" fill="white" />
                <rect x="-160" y="130" width="8" height="180" transform="rotate(-45)" fill="white" />
                <rect x="-180" y="130" width="8" height="180" transform="rotate(-45)" fill="white" />
            </svg>
            <img className="rounded-t-lg" src={imageSrc} alt="Project demo screenshot" />
            <div className="px-4 pt-2 pb-4 bg-transparent flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="pt-2 pb-1 text-[1rem] font-bold text-[var(--primary)] dark:text-white">
                        {title}
                    </h2>
                    <p className="py-1 text-[0.75rem]">
                        {summary}
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 py-2 w-full">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-[0.75rem] font-semibold text-[var(--primary)] dark:text-white">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard;