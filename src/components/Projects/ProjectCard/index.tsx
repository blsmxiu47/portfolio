import { ProjectCardProps } from './types';
import './index.scss';

const ProjectCard = ({
    title,
    summary,
    imageSrc,
    demoLink,
    githubLink
}: ProjectCardProps) => {
    return (
        <div className="project-card">
            <img src={imageSrc} alt="Project demo screenshot" />
            <h2>{title}</h2>
            <p>{summary}</p>
            <div className="project-links">
                <a href={demoLink}>Live demo</a>
                <a href={githubLink}>Project repo</a>
            </div>
        </div>
    )
}

export default ProjectCard;