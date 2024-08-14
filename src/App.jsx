import React, { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import Skills from "./components/skills";

import { ReactLenis, useLenis } from "lenis/react";

function App() {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
    });
    const [showWelcome, setShowWelcome] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWelcome(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const [darkMode, setDarkMode] = useState(() => {
        const ret =
            JSON.parse(window.localStorage.getItem("darkMode")) || false;
        if (ret) document.documentElement.classList.add("dark");
        return ret;
    });

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");
        window.localStorage.setItem("darkMode", JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    };

    const [hamOpen, setHamOpen] = useState(false);

    const toggleHam = () => {
        setHamOpen(!hamOpen);
    };

    return (
        <>
            <div className={`relative z-[1000]`}>
                <div
                    className={`absolute  transition-transform  duration-500 ${
                        showWelcome ? "" : "translate-y-[-100%]"
                    } `}
                >
                    <div className={`relative w-screen `}>
                        <div
                            className={`h-screen flex  items-center justify-center text-5xl  md:text-8xl  font-icooper text-center bg-black text-white tracking-wider`}
                        >
                            {'"'}Peace be upon you.{'"'}
                        </div>
                        <div className={`rounded-div-wrap`}>
                            <div className="rounded-div"></div>
                        </div>
                    </div>
                </div>
            </div>
            {!showWelcome && (
                <ReactLenis root>
                    <div className="fixed top-0 h-full w-full -z-10 transition-all duration-400">
                        <div
                            className={`absolute top-0 -z-10 h-screen w-screen bg-black bg-[size:20px_20px]${
                                darkMode ? "opacity-100" : "opacity-0"
                            } transition-all duration-400`}
                        ></div>
                        <div
                            className={`absolute top-0 z-[-10] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] ${
                                !darkMode ? "opacity-100" : "opacity-0"
                            } transition-all duration-400`}
                        ></div>
                    </div>
                    <Navbar
                        darkMode={darkMode}
                        toggleDarkMode={toggleDarkMode}
                        hamOpen={hamOpen}
                        toggleHam={toggleHam}
                    />
                    {/* <MobileMenu hamOpen={hamOpen} /> */}
                    <div
                        className={`dark:text-white px-8 pt-24 sm:pt-40 md:pt-40 sm:px-10 md:px-14  lg:px-20 max-w-screen-2xl m-auto ${
                            hamOpen && "blur-md"
                        }`}
                    >
                        <Banner darkMode={darkMode} />
                        <AboutMe darkMode={darkMode} />
                        <Skills />
                        <Footer darkMode={darkMode} />
                    </div>
                </ReactLenis>
            )}
        </>
    );
}

export default App;
