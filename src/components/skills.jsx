import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { LiaJava } from "react-icons/lia";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
    SiExpress,
    SiIntellijidea,
    SiMongodb,
    SiMysql,
    SiPostman,
    SiSpringboot,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import mySkills from "../constants/mySkills";

function Skills() {
    const textVariant = {
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
        hide: {
            y: 25,
            opacity: 0,
            transition: {
                duration: 1,
            },
        },
    };

    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.4, once: true });

    const iconStyles =
        "size-14 text-black/95 dark:text-white/95 transition-colors duration-200";

    return (
        <>
            <motion.div
                variants={textVariant}
                initial="hide"
                animate={isInView ? "show" : "hide"}
                className="text-[3rem] sm:text-[3.5rem] md:text-[5rem] pt-28 pb-12 lg:text-[7rem] text-invert tracking-wider   flex justify-center font-inter font-bold overflow-hidden"
                ref={ref}
            >
                <h1>SKILLS</h1>
            </motion.div>
            <div className="flex flex-col justify-center items-center  md:flex-row w-full text-invert">
                <div
                    className="w-full md:w-[55%] flex flex-col overflow-hidden border-2  p-5 gap-3 
                     hover:bg-gradient-to-br from-white/5  via-cyan-700/10 to-white/20 hover:dark:bg-slate-400/30 transition-colors duration-300 dark:bg-white/5  bg-white/20 border-neutral-500/30 dark:border-neutral-200/40 rounded-2xl justify-center items-center font-inter text-center  dark:shadow-[0_0_20px_0_rgb(255,255,255,0.1)] shadow-[0_0_15px_0_rgb(0,0,0,0.1)]
                "
                >
                    {mySkills.map((obj) => {
                        const { category, skills } = obj;
                        console.log(category, skills);
                        const allSkills = skills.join(", ");
                        console.log(allSkills);
                        return (
                            <div
                                key={category}
                                className="flex flex-col md:flex-row w-full gap-5 items-center  p-2 justify"
                            >
                                <div className="w-full md:w-[25%] tracking-tight md:tracking-normal md:text-end justify-center overflow-hidden md:justify-end flex items-end  text-xl text-black dark:text-white font-medium ">
                                    {category}
                                </div>
                                <div className="w-full items-center md:items-start md:w-[75%] flex text-center md:text-start justify-center md:justify-start font-inter">
                                    {allSkills}.
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="text-4xl p-2 md:pl-16 grid grid-cols-4 gap-5 md:pt-0 pt-10 text-invert text-center font-extrabold w-full md:w-[35%]">
                    <LiaJava
                        className={`${iconStyles}  hover:text-[#E87408] dark:hover:text-[#E87408]`}
                    />
                    <FaHtml5
                        className={`${iconStyles} dark:hover:text-[#e34c26]`}
                    />
                    <FaPython
                        className={`${iconStyles} dark:hover:text-[#4B8BBE]`}
                    />
                    <RiJavascriptFill
                        className={`${iconStyles} dark:hover:text-[#323330] dark:hover:bg-[#f0db4f] rounded-xl `}
                    />
                    <TbBrandCpp
                        className={`${iconStyles} dark:hover:text-[#084A86]`}
                    />
                    <FaNodeJs
                        className={`${iconStyles} dark:hover:text-[#215732]`}
                    />
                    <SiExpress className={`${iconStyles} `} />
                    <SiSpringboot
                        className={`${iconStyles} dark:hover:text-[#6CB52D]`}
                    />
                    <FaReact
                        className={`${iconStyles} dark:hover:text-[#61dbfb]`}
                    />
                    <RiTailwindCssFill
                        className={`${iconStyles} dark:hover:text-[#38BDF8]`}
                    />
                    <SiMysql
                        className={`${iconStyles} dark:hover:text-[#F29111]`}
                    />
                    <SiMongodb
                        className={`${iconStyles} dark:hover:text-[#006F4C]`}
                    />
                    <SiPostman
                        className={`${iconStyles} dark:hover:text-[#FF713E]`}
                    />
                    <FaGithub className={`${iconStyles} `} />
                    <VscVscode
                        className={`${iconStyles} dark:hover:text-[#2CA3EE]`}
                    />
                    <SiIntellijidea
                        className={`${iconStyles} dark:hover:text-black hover:text-black dark:hover:bg-[#FE3763] hover:bg-[#FE3763]`}
                    />
                </div>
            </div>
        </>
    );
}

export default Skills;
