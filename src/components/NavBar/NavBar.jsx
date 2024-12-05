import { PropTypes } from "prop-types";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";

Navbar.propTypes = {
    showGreetings: PropTypes.func.isRequired,
};

function Navbar({ showGreetings }) {
    const navs = [
        { link: "/", name: "Home" },
        { link: "/blogs", name: "Blogs" },
        { link: "/fun", name: "Funmation" },
        { link: "/wlist", name: "Watch List" },
    ];

    const [openHam, setopenHam] = useState(false);

    const toggleHam = () => {
        setopenHam(!openHam);
    };

    const navLinkClick = (name) => {
        showGreetings(`• ${name}`);
        toggleHam();
    };

    const allNavs = navs.map((obj, index) => {
        return (
            <NavLink
                to={obj.link}
                key={index}
                className={({ isActive }) => {
                    return isActive
                        ? `rounded-full bg-[#EEEEEE] `
                        : `hover:bg-[#EEEEEE] rounded-full `;
                }}
                onClick={() => navLinkClick(obj.name)}
            >
                <p className="px-5 py-3">{obj.name}</p>
            </NavLink>
        );
    });

    return (
        <React.Fragment>
            {/* <section
                id="warning-msg"
                className={`sticky w-full top-0 z-[10001] font-inter `}
            > */}
            {/* <div className="bg-black text-white  font-normal text-center tracking-wide p-1 text-sm sm:text-base ">
                    This portfolio is currently under development!
                </div> */}
            {/* </section> */}

            <section id="navbar" className="font-hl_sbold">
                <nav
                    id="wide-nav"
                    className="text-lg hidden md:block  py-8 border-b border-border-b"
                >
                    <div className="flex justify-center items-center gap-16">
                        {allNavs}
                    </div>
                </nav>
                <div className="relative">
                    <MobileNav
                        allNavs={allNavs}
                        toggleHam={toggleHam}
                        openHam={openHam}
                        navLinkClick={navLinkClick}
                    />
                </div>
            </section>
        </React.Fragment>
    );
}

export default Navbar;
