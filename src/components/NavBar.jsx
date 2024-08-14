import { GiNightSky } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";

function Navbar({ darkMode, toggleDarkMode, hamOpen, toggleHam }) {
    const iconClasses = "h-6 w-6 cursor-pointer transition-all duration-400";

    const text_invert =
        "hover:bg-black/90 transition-all duration-400 hover:border-neutral-700 hover:text-neutral-200 dark:hover:bg-white/95 dark:hover:text-neutral-700";

    function goTop(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <div className="sticky flex top-0 backdrop-blur-[2px]  z-[100] border-b border-neutral-400 dark:border-neutral-500 w-xl bg-white/10 dark:bg-black/10 flex-col">
            <h4 className="flex bg-black dark:bg-white w-full text-white dark:text-black font-inter text-center justify-center  tracking-wide p-1 text-sm sm:text-base">
                Portfolio currently under development!
            </h4>
            <div className="flex max-w-screen-2xl m-auto z-[101] blur-none items-center p-2 sm:p-3 md:p-4 justify-between h-full w-full px-4 sm:px-6 md:px-8">
                <div onClick={goTop}>
                    <header
                        className={`uppercase cursor-pointer text-neutral-900 dark:text-neutral-200 tracking-widest border-2 rounded-sm border-neutral-500 font-sans px-2 ${text_invert} text-sm sm:text-md md:text-base`}
                    >
                        <a href="#">Moursalin Emon</a>
                    </header>
                </div>
                <div className="flex flex-row  gap-4 backdrop-opacity-100 transition-opacity justify-between sm:justify-end items-center">
                    {darkMode ? (
                        <IoSunnyOutline
                            className={`${iconClasses} text-white `}
                            onClick={toggleDarkMode}
                        />
                    ) : (
                        <GiNightSky
                            className={`${iconClasses} text-neutral-800/90 `}
                            onClick={toggleDarkMode}
                        />
                    )}
                    {/* <div className="relative items-center flex">
                        <RxHamburgerMenu
                            className={`${iconClasses} absolute sm:hidden text-black dark:text-white  ${
                                !hamOpen ? "opacity-100" : "opacity-0"
                            } transition-all duration-700`}
                            onClick={toggleHam}
                        />

                        <RxCross1
                            className={`${iconClasses} sm:hidden  text-black dark:text-white  ${
                                hamOpen ? "opacity-100" : "opacity-0"
                            } transition-all duration-700`}
                            onClick={toggleHam}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
