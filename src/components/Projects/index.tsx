// import projectCardImageFFT from "../../assets/images/project-card-image-fft.png";
import projectCardImagePC from "../../assets/images/project-card-image-pace-converter.png";
import projectCardImageGorter from "../../assets/images/project-card-image-gorter.png";

import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <div className="px-2 py-32">
            <section className="flex flex-col text-center mx-8">
                <h1 className="text-[2rem] mb-2">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <ProjectCard
                        title="Fearless Fitness Tracker"
                        summary="Web app for designing workout routines and tracking training history. Specially designed to meet the needs of runners with respect to building training plans and tracking progress toward goals."
                        imageSrc="https://via.placeholder.com/200x100"
                        // imageSrc={projectCardImageFFT}
                        tags={["Next.js", "AWS", "PostgreSQL"]}
                        githubLink="https://github.com/blsmxiu47/fearless-fitness-tracker"
                    />
                    <ProjectCard
                        title="Pace Converter"
                        summary="Web app for converting (e.g. running) paces from min/km to min/mi and vice versa, and for converting pace to 5k, marathon, etc. race times."
                        imageSrc={projectCardImagePC}
                        tags={["React", "TypeScript", "Tailwind CSS"]}
                        githubLink="https://github.com/blsmxiu47/pace-converter"
                    />
                    <ProjectCard
                        title="Fantastic Product"
                        summary="Sample website for a fictional software product. Built to showcase responsive design principles and a variety of UI components."
                        imageSrc="https://via.placeholder.com/200x100"
                        tags={["React", "TypeScript", "Tailwind CSS"]}
                        githubLink="https://github.com/blsmxiu47/fantastic-product"
                    />
                    <ProjectCard
                        title="Time Since..."
                        summary="Web app for calculating datetime difference between two dates and/or times using a range of units."
                        imageSrc="https://via.placeholder.com/200x100"
                        tags={["React", "TypeScript", "Tailwind CSS"]}
                        githubLink="https://github.com/blsmxiu47/time-since"
                    />
                    <ProjectCard
                        title="cIRCb"
                        summary="Internet Relay Chat (IRC) written entirely in C, with support for an arbitrary number of servers and clients. Includes user authentication, scalability, and fault tolerance."
                        imageSrc="https://via.placeholder.com/200x100"
                        tags={["C"]}
                        githubLink="https://github.com/blsmxiu47/circb"
                    />
                    <ProjectCard
                        title="Haebaragi"
                        summary="API for Haebaragi vocabulary, expressions, and grammar points data (Haebaragi is a spaced repitition-style language learning app also built with Go)."
                        imageSrc="https://via.placeholder.com/200x100"
                        tags={["Golang"]}
                        githubLink="https://github.com/blsmxiu47/haebaragi"
                    />
                    <ProjectCard
                        title="Gorter"
                        summary="Ultra-simple URL shortener written in Go. Rather than simply generating a shorter URL, also adds an (adimittedly silly) element of fun and surprise to the generation process."
                        imageSrc={projectCardImageGorter}
                        tags={["Golang"]}
                        githubLink="https://github.com/blsmxiu47/gorter"
                    />
                    <ProjectCard
                        title="Glaso"
                        summary="Motivational browser extension built using the WebExtensions API."
                        imageSrc="https://via.placeholder.com/200x100"
                        tags={["JavaScript", "WebExtensions API"]}
                        githubLink="https://github.com/blsmxiu47/glaso"
                    />
                </div>
            </section>
        </div>
    )
};