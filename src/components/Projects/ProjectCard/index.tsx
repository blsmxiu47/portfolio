import { ProjectCardProps } from '../../../lib/types';

const ProjectCard = ({
    title,
    summary,
    imageSrc,
    tags,
    githubLink
}: ProjectCardProps) => {
    return (
        <a className="max-w-[16rem] justify-self-center flex flex-col justify-center mx-2 my-1 rounded-lg shadow-md hover:scale-110 transition duration-700 ease-in-out cursor:pointer" href={githubLink} target="_blank" rel="noopener noreferrer">
            <img className="rounded-t-lg" src={imageSrc} alt="Project demo screenshot" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="pt-2 pb-1 text-[1rem] font-bold text-[var(--primary)]">
                    {title}
                </h2>
                <p className="py-1 text-[0.75rem]">
                    {summary}
                </p>
                <div className="flex flex-wrap justify-center gap-4 py-2 w-full">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-[0.75rem] font-semibold text-[var(--primary)]">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard;