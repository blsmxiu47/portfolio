import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="mx-2 my-32">
            <section className="flex flex-col text-center mx-8">
                <h1 className="text-[2rem] mb-2">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <ProjectCard
                        title="Fearless Fitness Tracker"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        tags={["React", "TypeScript", "Tailwind CSS"]}
                        githubLink="https://github.com/blsmxiu47/fearless-fitness-tracker"
                    />
                    <ProjectCard
                        title="Pace Converter"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        tags={["React", "TypeScript", "Tailwind CSS"]}
                        githubLink="https://github.com/blsmxiu47/pace-converter"
                    />
                    <ProjectCard
                        title="Fantastic Product"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        tags={["React", "TypeScript", "Tailwind CSS"]}
                        githubLink="https://github.com/blsmxiu47/fantastic-product"
                    />
                    <ProjectCard
                        title="Time Since..."
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        tags={["React", "TypeScript", "Tailwind CSS"]}
                        githubLink="https://github.com/blsmxiu47/time-since"
                    />
                    <ProjectCard
                        title="cIRCb"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        tags={["C"]}
                        githubLink="https://github.com/blsmxiu47/circb"
                    />
                    <ProjectCard
                        title="Haebaragi"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        tags={["Golang"]}
                        githubLink="https://github.com/blsmxiu47/haebaragi"
                    />
                    <ProjectCard
                        title="Gorter"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        tags={["Golang"]}
                        githubLink="https://github.com/blsmxiu47/gorter"
                    />
                    <ProjectCard
                        title="Glaso"
                        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl vitae aliquam ultricies, nunc nisl ultricies nunc, vitae aliquam nisl nisl vitae aliquam nisl."
                        imageSrc="https://via.placeholder.com/200x150"
                        tags={["JavaScript", "WebExtensions API"]}
                        githubLink="https://github.com/blsmxiu47/glaso"
                    />
                </div>
            </section>
        </div>
    )
};