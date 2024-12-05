import { PropTypes } from "prop-types";

WrittenSkills.propTypes = {
    name: PropTypes.string.isRequired,
};

function WrittenSkills({ name }) {
    return (
        <div className="bg-[#111111] text-center  rounded-xl hover:scale-[110%] transition-transform duration-300  items-center text-white ">
            <p className="font-light tracking-wide px-5 py-3">{name}</p>
        </div>
    );
}

export default WrittenSkills;
