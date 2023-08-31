import ProjectCard from "./ProjectCard";
import './index.scss';

const Projects = () => {
    return (
        <div className="container projects-page">
            <section>
                <h1>Projects</h1>
                <div className="projects-grid">
                    <ProjectCard
                        title="Project 1"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/150"
                        demoLink="#"
                        githubLink="#"
                    />
                    <ProjectCard
                        title="Project 2"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/150"
                        demoLink="#"
                        githubLink="#"
                    />
                    <ProjectCard
                        title="Project 3"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/150"
                        demoLink="#"
                        githubLink="#"
                    />
                    <ProjectCard
                        title="Project 4"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/150"
                        demoLink="#"
                        githubLink="#"
                    />
                    <ProjectCard
                        title="Project 5"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/150"
                        demoLink="#"
                        githubLink="#"
                    />
                </div>
            </section>
        </div>
    )
}

export default Projects;