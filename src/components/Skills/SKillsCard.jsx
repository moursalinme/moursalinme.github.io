import { PropTypes } from "prop-types";
import Tech from "./Tech";

SKillsCard.propTypes = {
    type: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(
        PropTypes.shape({
            logo: PropTypes.elementType.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    colspan: PropTypes.string.isRequired,
};

function SKillsCard({ type, techs, colspan }) {
    const techList = techs.map((tech) => {
        return <Tech key={tech.name} Logo={tech.logo} name={tech.name} />;
    });

    return (
        <div className={`px-[5%] ${colspan}`}>
            <div className="  border-b border-white md:border-b-0 pb-10">
                <div className="font-hl_reg  text-2xl md:text-3xl text-center  pb-7">
                    {type}
                </div>
                <div className="flex items-center justify-center gap-5 flex-wrap relative">
                    {techList}
                </div>
            </div>
        </div>
    );
}

export default SKillsCard;
