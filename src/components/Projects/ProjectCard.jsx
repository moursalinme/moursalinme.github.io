import { PropTypes } from "prop-types";

ProjectCard.propTypes = {
    // bgColor: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    techStack: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default function ProjectCard({
    // bgColor,
    title,
    type,
    techStack,
    imgUrl,
    link,
}) {
    return (
        <div
            id="projectCard"
            className={`group hover:outline-none transition-transform duration-500 text-white`}
        >
            <div
                id="heading"
                className={`py-5 text-title text-center md:text-start`}
            >
                <h1
                    id="title"
                    className="font-hl_sbold text-[28px] font-semibold px-5 md:px-0"
                >
                    {title}
                </h1>
                <h3 className="font-normal md:text-[18px] text-[16px]  py-2 md:px-0 px-3">
                    {type} <span className="px-2">|</span> {techStack}
                </h3>
            </div>
            <a target="_blank" href={link}>
                <div
                    className={`p-5 hover:scale-[97%] transition-transform duration-300  overflow-hidden hover:shadow-2xl   shadow-black rounded-xl`}
                >
                    <img src={`${imgUrl}`} className="" />
                </div>
            </a>
        </div>
    );
}
