import myProjects from "../../constants/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const allProjects = myProjects.map((project) => {
        return (
            <ProjectCard
                // bgColor={`${project.bgColor}`}
                key={`${project.title}`}
                link={`${project.link}`}
                title={`${project.title}`}
                type={`${project.type}`}
                techStack={`${project.techStack}`}
                imgUrl={`${project.imgUrl}`}
            />
        );
    });

    return (
        <section
            id="projects"
            className={`px-[5%] font-inter max-w-screen-2xl flex justify-center items-center m-auto pt-14 pb-20`}
        >
            <div>
                <h1 className="text-2xl font-hl_bold tracking-wide pb-4 border-b border-black ">
                    • Projects
                </h1>
                <div
                    id="project-container"
                    className="grid grid-cols-1 size-[500] md:grid-cols-2 pt-8 gap-10 "
                >
                    {allProjects}
                </div>
            </div>
        </section>
    );
}
