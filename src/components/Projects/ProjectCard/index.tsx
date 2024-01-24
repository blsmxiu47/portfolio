import { ProjectCardProps } from '../../../lib/types';
import './index.scss';

const ProjectCard = ({
    title,
    summary,
    imageSrc,
    demoLink,
    githubLink
}: ProjectCardProps) => {
    return (
        <a className="max-w-[16rem] justify-self-center flex flex-col justify-center mx-2 my-1 rounded-lg shadow-md hover:scale-110 transition duration-700 ease-in-out cursor:pointer" href={githubLink}>
            <img className="rounded-t-lg" src={imageSrc} alt="Project demo screenshot" />
            <div className="px-4 pt-2 pb-4">
                <h2 className="pt-2 pb-1 text-md">
                    {title}
                </h2>
                <p className="py-1 text-sm">
                    {summary}
                </p>
                <div className="flex justify-between py-2 w-full">
                    <a className="text-[1rem] font-semibold text-[var(--primary)] hover:text-[var(--accent-1)] transition-all ease-in-out" href={demoLink}>
                        Live demo
                    </a>
                    <a className="text-[1rem] font-semibold text-[var(--primary)] hover:text-[var(--accent-1)] transition-all ease-in-out" href={githubLink}>
                        Project repo
                    </a>
                </div>
            </div>
        </a>
    )
}

export default ProjectCard;