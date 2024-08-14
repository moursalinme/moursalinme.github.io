import { motion } from "framer-motion";

function Banner({ darkMode }) {
    const containerVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 120,
                duration: 0.5,
                staggerChildren: 0.1, // Stagger children animation
            },
        },
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariant}
            className="text-5xl sm:text-6xl md:text-8xl font-cooper text-black dark:text-white   "
        >
            <span className="text-5xl sm:text-6xl  md:text-8xl">Hi, I am</span>{" "}
            {/* <span
                className={` ${
                    darkMode
                        ? "stroked-text-darkmode"
                        : "stroked-text-lightMode"
                }`}
            >
                <br />M
            </span> */}
            <br />
            <span className="text-5xl sm:text-6xl md:text-8xl  ">
                Moursalin
            </span>{" "}
            {/* <span
                className={`  ${
                    darkMode
                        ? "stroked-text-darkmode"
                        : "stroked-text-lightMode"
                }`}
            >
                E
            </span> */}
            <span className=" text-5xl sm:text-6xl  md:text-8xl ">Emon</span>
            <hr className="border-neutral-700/50 dark:border-neutral-200/50 my-5" />
            <h3 className=" text-3xl sm:text-4xl md:text-5xl">
                {" "}
                {/* <span
                    className={` text-3xl sm:text-4xl md:text-5xl  ${
                        darkMode
                            ? "stroked-text-darkmode"
                            : "stroked-text-lightMode"
                    }`}
                >
                    J
                </span> */}
                Junior{" "}
                {/* <span
                    className={`  text-3xl sm:text-4xl md:text-5xl  ${
                        darkMode
                            ? "stroked-text-darkmode"
                            : "stroked-text-lightMode"
                    }`}
                >
                    S
                </span> */}
                Software{" "}
                {/* <span
                    className={` font-poppins text-3xl sm:text-4xl md:text-5xl ${
                        darkMode
                            ? "stroked-text-darkmode"
                            : "stroked-text-lightMode"
                    }`}
                >
                    E
                </span> */}
                Engineer
            </h3>
        </motion.div>
    );
}

export default Banner;
