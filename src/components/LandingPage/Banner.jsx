import { PropTypes } from "prop-types";

Banner.propTypes = {
    maxPadding: PropTypes.string.isRequired,
};

function Banner({ maxPadding }) {
    return (
        <section id="Banner" className={`${maxPadding}`}>
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-0 items-center  pt-48 pb-16 md:pb-24 md:pt-20 text-black">
                <div
                    id="left side"
                    className={`text-5xl md:w-[50%] text-center md:text-start sm:text-6xl   md:text-6xl  font-semibold text-black md:pr-[5%] font-hl_sbold`}
                >
                    <p className="inline-block pb-2">
                        {/* <span className="font-hl_sbold"> */}
                        Hello, {/* </span>  */}I am
                    </p>
                    <br />
                    <span className="font-bold tracking-wide">
                        Moursalin
                    </span>{" "}
                    Emon
                    <div className="py-5">
                        <hr className="hidden md:block text-border-b" />
                    </div>
                    <h3 className="font-hl_bold text-black text-2xl sm:text-3xl md:text-4xl ">
                        Junior Software Engineer
                    </h3>
                </div>
                <div className="md:w-[50%] md:py-7 md:pl-14 text-center md:text-start justify-center items-center md:border-l border-border-b border-t md:border-t-0 pt-10  text-[18px]">
                    <h1 className="md:text-start pb-7  font-semibold">
                        Welcome to my portfolio
                    </h1>
                    <div className="text-[20px] md:text-[22px]">
                        I love to build web applications, solve data-structure
                        related problems & puzzels. I have solved nearly{" "}
                        <span className=" font-hl_sbold ">1500</span> problems
                        in various coding platforms. I competed in programming
                        contests like{" "}
                        <span className="font-hl_sbold ">ICPC,</span>{" "}
                        <span className="font-hl_sbold ">Meta Hacker-Cup,</span>{" "}
                        <span className="font-hl_sbold ">Google Code jam</span>{" "}
                        and some online platforms like{" "}
                        <span className="font-hl_sbold ">Codeforces.</span>
                    </div>
                    <h1 className="md:text-start font-semibold pt-7">
                        It{"'"}s nice to meet you. Scroll down & get to know
                        more about me
                    </h1>
                </div>
            </div>
        </section>
    );
}

export default Banner;
