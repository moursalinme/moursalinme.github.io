import gsap from "gsap";
import { node, PropTypes } from "prop-types";
import { Link } from "react-router-dom";

MobileNav.propTypes = {
    openHam: PropTypes.bool.isRequired,
    toggleHam: PropTypes.func.isRequired,
    allNavs: PropTypes.arrayOf(node).isRequired,
};

function MobileNav({ openHam, toggleHam, allNavs }) {
    const handleClick = () => {
        if (openHam) {
            gsap.to("#menu-container", {
                y: "-100%",
                duration: 1,
            });
        } else {
            gsap.to("#menu-container", {
                y: "0",
                duration: 1,
            });
        }
        toggleHam();
    };

    return (
        <nav
            id="mobile-nav"
            className="md:hidden  font-bold absolute top-0 left-0 w-full "
        >
            <div id="mbl-menu-container" className={`flex flex-col gap-5`}>
                <div
                    id="logo + menu"
                    className="flex justify-between items-center  z-[120] bg-white  text-3xl p-6 "
                >
                    <div id="logo" className="">
                        <Link to="/">
                            <p className="font-bold font-hl_sbold text-3xl size-12 items-center flex justify-center text-center text-white bg-black rounded-full">
                                M
                            </p>
                        </Link>
                    </div>

                    <div id="animated-menu">
                        <div className="md:hidden">
                            <button
                                id="menu-btn"
                                type="button"
                                className={`z-40 block hamburger md:hidden focus:outline-none ${
                                    openHam ? "open" : " "
                                }`}
                                onClick={handleClick}
                            >
                                <span className="hamburger-top"></span>
                                <span className="hamburger-middle"></span>
                                <span className="hamburger-bottom"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    id="menu-container"
                    className="relative flex justify-center w-full text-xl "
                >
                    <div className="absolute top-0 left-0 w-full z-[110]">
                        <div
                            id="mbl-nav-links"
                            className={` ${
                                openHam ? "translate-y-0" : "-translate-y-full"
                            } transition-transform duration-300 pt-10 absolute w-full`}
                        >
                            <div className="flex flex-col justify-center items-center gap-5  bg-white border-b border-border-b shadow-sm pb-10">
                                {allNavs}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MobileNav;
