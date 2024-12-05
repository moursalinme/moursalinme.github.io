import { PropTypes } from "prop-types";

Tech.propTypes = {
    Logo: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
};

function Tech({ Logo, name }) {
    return (
        <div className="bg-[#111111] text-center py-3 px-5 rounded-xl hover:scale-[110%] transition-transform duration-300 items-center flex flex-col text-white ">
            <Logo
                className={`text-5xl text-center items-center text-[#a0a0a0]`}
            />
            <p className="pt-2  tracking-wide">{name}</p>
        </div>
    );
}

export default Tech;
