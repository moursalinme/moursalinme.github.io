import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";

function Footer() {
    const iconStyles =
        "size-[2rem] md:size-12 z-[103] cursor-pointer hover:scale-105 transition-transform duration-400";

    return (
        <footer className=" bg-black   text-white font-hl_bold">
            <div className="max-w-screen-2xl m-auto px-[10%]">
                <div className=" sm:text-4xl text-3xl md:text-5xl pt-28 md:pt-28  font-semibold md:text-left    leading-[1.45] tracking-wide">
                    <h1>
                        Thanks for visiting <br /> my portfolio
                    </h1>
                </div>
                <div className="sm:text-xl text-lg md:text-2xl sm:text-start text-center md:pt-10  pt-16  pb-[72px]  tracking-wide font-hl_sbold flex flex-col-reverse  md:flex-row justify-between items-center ">
                    <div>
                        Made with {}
                        <GoHeart className="inline-block pr-2 text-4xl text-[#3B3D41]  " />
                        {""}
                        by me
                    </div>
                    <div className="flex flex-wrap pb-10 md:pb-0 gap-10">
                        <a
                            href="https://www.linkedin.com/in/moursalinme"
                            target="_blank"
                            className="flex md:flex-col md:justify-end justify-center"
                        >
                            <FaLinkedin className={iconStyles} />
                        </a>
                        <a
                            href="https://www.github.com/moursalinme"
                            target="_blank"
                            className="flex md:flex-col md:justify-end justify-center"
                        >
                            <FaGithub className={iconStyles} />
                        </a>
                        <a
                            href="mailto:me.moursalin@gmail.com"
                            className="flex md:flex-col md:justify-end justify-center"
                        >
                            <svg
                                width="64px"
                                height="47px"
                                viewBox="0 0 64 47"
                                version="1.1"
                                className={iconStyles}
                            >
                                <title>mail</title>
                                <desc>Created with Sketch.</desc>
                                <g
                                    id="Landing"
                                    stroke="none"
                                    strokeWidth="1"
                                    fill="none"
                                    fillRule="evenodd"
                                >
                                    <g
                                        id="Desktop-HD"
                                        transform="translate(-868.000000, -2866.000000)"
                                        className="fill-white"
                                    >
                                        <g
                                            id="Contact"
                                            transform="translate(-15.000000, 2610.000000)"
                                        >
                                            <g
                                                id="Group"
                                                transform="translate(144.000000, 238.000000)"
                                            >
                                                <path
                                                    d="M745.476887,32.6497624 C744.015845,31.7320285 742.636815,30.469893 741.340667,28.8637582 C740.044518,27.2576233 739.396226,25.7657526 739.396226,24.3889506 C739.396226,22.6846452 739.885265,21.2639883 740.863344,20.1273823 C741.841422,18.9911787 743.237808,18.4230769 745.052503,18.4230769 L797.093289,18.4230769 C798.624628,18.4230769 799.950718,18.9364607 801.070257,19.9636306 C802.189796,20.9908005 802.75,22.2255771 802.75,23.6679602 C802.75,25.3943942 802.172873,27.044384 801.017318,28.6171247 C799.862196,30.1906702 798.42502,31.5348827 796.704488,32.6489577 C787.84277,38.3529091 782.327087,41.9039477 780.159173,43.302476 C779.923549,43.4557669 779.422359,43.7885008 778.656473,44.3022869 C777.890587,44.816073 777.254445,45.2316886 776.747615,45.5483289 C776.240785,45.8649692 775.628076,46.2198317 774.909488,46.6133186 C774.1909,47.0060009 773.512667,47.3017196 772.876526,47.4976584 C772.239951,47.6948042 771.650674,47.7925724 771.108695,47.7925724 L771.073113,47.7925724 L771.037531,47.7925724 C770.495552,47.7925724 769.906276,47.6948042 769.2697,47.4976584 C768.633559,47.3017196 767.95576,47.0064032 767.236738,46.6133186 C766.517717,46.220234 765.905007,45.8649692 765.398177,45.5483289 C764.891781,45.2316886 764.255206,44.816073 763.489319,44.3022869 C762.723433,43.7889031 762.222678,43.4557669 761.987054,43.302476 C759.842138,41.9043501 756.754726,39.910361 752.724385,37.3209111 C748.694044,34.7314613 746.278356,33.1740093 745.476887,32.6497624 Z M799.214339,36.1569462 C800.55822,35.3047935 801.73634,34.3536655 802.75,33.3051717 L802.75,59.3316375 C802.75,60.7744229 802.196739,62.0083948 801.088482,63.035967 C799.980659,64.0635393 798.648928,64.5769231 797.093723,64.5769231 L745.052937,64.5769231 C743.497298,64.5769231 742.165567,64.0635393 741.057744,63.035967 C739.949921,62.0087971 739.396226,60.7744229 739.396226,59.3316375 L739.396226,33.3051717 C740.433319,34.3757941 741.623589,35.3269221 742.967036,36.1569462 C751.498967,41.5325894 757.355719,45.3025001 760.537728,47.4658737 C761.881175,48.3836075 762.971207,49.0997699 763.807824,49.6127513 C764.644441,50.1265374 765.758339,50.6507844 767.148651,51.1862968 C768.538962,51.7218092 769.835545,51.9893642 771.037531,51.9893642 L771.073113,51.9893642 L771.109129,51.9893642 C772.311115,51.9893642 773.607264,51.7218092 774.997576,51.1862968 C776.388321,50.6507844 777.501786,50.1265374 778.338402,49.6127513 C779.175453,49.0997699 780.265485,48.3836075 781.608933,47.4658737 C785.614974,44.7778509 791.48431,41.0079401 799.214339,36.1569462 Z"
                                                    id="mail"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
