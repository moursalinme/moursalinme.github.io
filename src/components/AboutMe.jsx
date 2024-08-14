import { motion } from "framer-motion";

function AboutMe({ darkMode }) {
    const containerVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1, // Stagger children animation
            },
        },
    };

    return (
        <div className="text-invert pt-28  flex w-full flex-col md:flex-row">
            <motion.div
                className="text-invert md:w-[50%] md:pr-10 md:pb-0 pb-5 flex justify-center items-center "
                initial="hidden"
                animate="visible"
                variants={containerVariant}
            >
                <h1 className=" text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] text-center justify-center items-center text-black dark:text-white z-[-10] font-bold font-inter tracking-wide">
                    ABOUT ME
                </h1>
            </motion.div>
            <div className="md:w-[50%] p-5  hover:bg-gradient-to-br from-white/5  via-cyan-700/10 to-white/20 hover:dark:bg-slate-400/30 transition-all duration-400  dark:bg-white/5  bg-white/20 border-2 border-neutral-500/30 dark:border-neutral-200/40 rounded-lg   justify-center items-center font-inter text-center  dark:shadow-[0_0_20px_0_rgb(255,255,255,0.1)] shadow-[0_0_15px_0_rgb(0,0,0,0.1)]  font-light">
                <div className="blur-none z-[100]">
                    I am a recent graduate{" "}
                    <span className="font-semibold">(May, 2024)</span>,
                    passionate about software engineering, with a particular{" "}
                    {""}
                    <span className="font-semibold">interest in backend.</span>
                    <br />
                    <br />
                    During my undergraduate studies, I built a strong foundation
                    in{" "}
                    <strong>
                        {" "}
                        Object-Oriented Programming (OOP), data structures,
                        algorithms and design patterns.
                    </strong>
                    <br />
                    <br />
                    Through my personal projects, I also gained experience with
                    various frontend and backend frameworks, APIs, version
                    control and more. Besides, I am constantly seeking to learn
                    more and improve my skills.
                    <br />
                    <br />
                    Additionally, I am a problem solver with a solve count of
                    over <span className="font-semibold">
                        1500+ problems
                    </span>{" "}
                    on various online judges like{" "}
                    <strong> Codeforces, AtCoder, UVa, LightOJ</strong> and
                    others.
                </div>
            </div>
        </div>
    );
}

export default AboutMe;

/*
    @text-through
 <div className="text-[3rem] sm:text-[3.5rem] md:text-[5rem] pt-28 pb-12 lg:text-[7rem] text-neutral-500/80 tracking-wider dark:text-neutral-500/50  flex justify-center font-inter font-bold overflow-hidden text-center">
                    <span
                        className={` font-inter   ${
                            darkMode
                                ? "stroked-text-darkmode"
                                : "stroked-text-lightMode"
                        }`}
                    >
                        W
                    </span>
                    ho{" "}
                    <span
                        className={` font-poppins  ${
                            darkMode
                                ? "stroked-text-darkmode"
                                : "stroked-text-lightMode"
                        }`}
                    >
                        A
                    </span>
                    m I{" "}
                    <span
                        className={` font-inter  ${
                            darkMode
                                ? "stroked-text-darkmode"
                                : "stroked-text-lightMode"
                        }`}
                    >
                        ?
                    </span>{" "}
                </div>
*/
