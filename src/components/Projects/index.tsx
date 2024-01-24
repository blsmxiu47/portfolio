import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <div className="mx-2 my-32">
            <section className="flex flex-col text-center mx-8">
                <h1 className="text-[2rem] mb-2">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <ProjectCard
                        title="Project 1"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        demoLink="#"
                        githubLink="#"
                    />
                    <ProjectCard
                        title="Project 2"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        demoLink="#"
                        githubLink="#"
                    />
                    <ProjectCard
                        title="Project 3"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        demoLink="#"
                        githubLink="#"
                    />
                    <ProjectCard
                        title="Project 4"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        demoLink="#"
                        githubLink="#"
                    />
                    <ProjectCard
                        title="Project 5"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        demoLink="#"
                        githubLink="#"
                    />
                </div>
            </section>
        </div>
    )
}

export default Projects;