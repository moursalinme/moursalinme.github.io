import { FaGit, FaGithub, FaJava, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPostman,
    SiSpringboot,
    SiTailwindcss,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import SKillsCard from "./SKillsCard";
import WrittenSkills from "./WrittenSkills";

function Skills() {
    const skillList = [
        {
            type: "Languages",
            colspan: " md:col-span-8",
            techs: [
                {
                    logo: TbBrandCpp,
                    name: "C++",
                },
                {
                    logo: FaJava,
                    name: "Java",
                },
                {
                    logo: RiJavascriptFill,
                    name: "JavaScript",
                },
                // {
                //     logo: FaPython,
                //     name: "Python",
                // },
            ],
        },
        {
            type: "Front-end",
            colspan: "md:col-span-4",
            techs: [
                {
                    logo: FaReact,
                    name: "React",
                },
                {
                    logo: SiTailwindcss,
                    name: "Tailwind",
                },
            ],
        },
        {
            type: "Back-end",
            colspan: " md:col-span-4",
            techs: [
                {
                    logo: FaNodeJs,
                    name: "Node.js",
                },
                {
                    logo: SiExpress,
                    name: "Express",
                },
                {
                    logo: SiSpringboot,
                    name: "Spring Boot",
                },
                // {
                //     logo: SiSpring,
                //     name: "Spring Framework",
                // },
            ],
        },
        {
            type: "Databases",
            colspan: "col-span-4",
            techs: [
                {
                    logo: SiMysql,
                    name: "MySQL",
                },
                {
                    logo: SiMongodb,
                    name: "MongoDB",
                },
            ],
        },
        {
            type: "Tools",
            colspan: "md:col-span-4",
            techs: [
                {
                    logo: FaGit,
                    name: "Git",
                },
                {
                    logo: FaGithub,
                    name: "Github",
                },
                {
                    logo: SiPostman,
                    name: "Postman",
                },
            ],
        },
    ];

    const otherSkills = [
        "RESTful API",
        "Object Oriented Programming",
        "Design Patterns",
        "Linux (Ubuntu)",
        "Data Structures and Algorithms",
        "Problem Solving",
        "Swagger UI",
    ];

    const techCards = skillList.map((skill, index) => {
        return (
            <SKillsCard
                key={index}
                id={skill.name}
                type={skill.type}
                techs={skill.techs}
                colspan={skill.colspan}
            />
        );
    });

    const otherSkillsCard = otherSkills.map((name, index) => {
        return <WrittenSkills key={index} name={name} />;
    });

    return (
        <section
            id="skills"
            className={`bg-black text-white items-center border-b border-[#292929] py-7 md:py-14`}
        >
            <div className="max-w-screen-2xl px-[5%] m-auto">
                <h1 className="text-2xl pt-6 font-hl_bold pb-4  border-b border-white">
                    • Skills
                </h1>
                <div className="mt-10 flex md:flex-none flex-col md:grid md:grid-cols-12  gap-10 ">
                    {techCards}
                </div>

                <div className="md:flex px-[5%]">
                    <div className=" mt-10  md:pb-8 border-b border-[#a0a0a0] md:border-b-0 pb-10">
                        <div className="font-hl_reg text-2xl md:text-3xl text-center pb-7">
                            Others
                        </div>
                        <div className="flex items-center font-normal justify-center gap-5 flex-wrap relative">
                            {otherSkillsCard}
                        </div>
                    </div>

                    <div className="px-[5%] mt-10 pb-12 md:pb-8">
                        <div className="font-hl_reg text-2xl md:text-3xl text-center pb-7">
                            Communication
                        </div>
                        <div className="flex items-center font-normal justify-center gap-5 flex-wrap relative">
                            <div className="bg-[#111111] text-center  rounded-xl hover:scale-[110%] transition-transform duration-300  items-center text-white ">
                                <p className="font-light tracking-wide px-5 py-3">
                                    Bengali (Native)
                                </p>
                            </div>{" "}
                            <div className="bg-[#111111] text-center  rounded-xl hover:scale-[110%] transition-transform duration-300  items-center text-white ">
                                <p className="font-light tracking-wide px-5 py-3">
                                    English (Fluent)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
