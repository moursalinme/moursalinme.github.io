function MobileMenu({ hamOpen }) {
    const hamAnchorstyles =
        "w-full px-20 text-center hover:text-cyan-600 text-lg font-semibold transition duration-100 cursor-pointer";
    const hrtagStyles =
        "border-neutral-700/50 border-2 dark:border-neutral-200/50 mt-4";
    return (
        <div
            className={`fixed flex z-20 top-4 sm:top-6 md:top-8 h-screen w-screen transition-all duration-300 ${
                hamOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
            }`}
        >
            <div className=" flex items-center uppercase font-sans tracking-widest flex-col justify-center font-xl font-semibold w-full gap-5 dark:text-white">
                <a className={hamAnchorstyles}>
                    About Me
                    <hr className={hrtagStyles} />
                </a>
                <a className={hamAnchorstyles}>
                    Education
                    <hr className={hrtagStyles} />
                </a>
                <a className={hamAnchorstyles}>
                    Projects
                    <hr className={hrtagStyles} />
                </a>
                <a className={hamAnchorstyles}>
                    Skills
                    <hr className={hrtagStyles} />
                </a>
                <a className={hamAnchorstyles}>
                    Co-curricular
                    <hr className={hrtagStyles} />
                </a>
                <a className={hamAnchorstyles}>Achievements</a>
            </div>
        </div>
    );
}

export default MobileMenu;
