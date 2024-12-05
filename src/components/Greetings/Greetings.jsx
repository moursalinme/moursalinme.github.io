import gsap from "gsap";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

Greetings.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    resetGreet: PropTypes.func.isRequired,
};

export default function Greetings({ text, resetGreet }) {
    const [showWelcome, setShowWelcome] = useState(true);

    const toggleWelcome = () => {
        setShowWelcome(false);
    };

    useEffect(() => {
        const stopScroll = (event) => {
            event.preventDefault();
            window.scrollTo(0, 0);
        };
        window.addEventListener("scroll", stopScroll);

        const tl = gsap.timeline();
        tl.to("#g-words", {
            opacity: 1,
            duration: 0.4,

            stagger: {
                each: 0.6,
                onComplete: () => {
                    gsap.to("#g-words", {
                        opacity: 0,
                        duration: 0.2,
                    });
                },
            },
            onComplete: () => {
                toggleWelcome();
            },
        }).to("#g-words", {
            onComplete: () => {
                window.removeEventListener("scroll", stopScroll);
                resetGreet();
            },
        });
    }, []);

    const wordsArray = text.map((word, index) => {
        return (
            <p
                id="g-words"
                key={index}
                className="absolute opacity-0 text-center items-center px-[5%]"
            >
                <span> {word} </span>
            </p>
        );
    });

    return (
        <section id="greetings" className={`relative z-[1000000] font-inter`}>
            <div
                className={`absolute  transition-transform  duration-[700ms] ${
                    showWelcome ? "" : "translate-y-[-100%]"
                } `}
            >
                <div className={`relative`}>
                    <div
                        className={`h-screen flex w-screen items-center justify-center text-5xl  md:text-6xl tracking-tight  text-center bg-[#1C1C1F] text-white font-[450]  relative`}
                    >
                        {wordsArray}
                    </div>
                    <div className={`rounded-div-wrap`}>
                        <div className="rounded-div"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
