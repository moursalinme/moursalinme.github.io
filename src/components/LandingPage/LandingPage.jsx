import Projects from "../Projects/Projects";
import Skills from "../Skills/skills";
import Banner from "./Banner";
import Connect from "./connect";
import Education from "./Education";

function LandingPage() {
    const maxPadding = " px-[5%] lg:px-[10%] max-w-screen-2xl m-auto";

    return (
        <section id="landing-page" className="font-inter font-light">
            <Banner maxPadding={maxPadding} />
            {/* <AboutMe maxPadding={maxPadding} /> */}
            <Skills maxPadding={maxPadding} />
            <Education maxPadding={maxPadding} />
            <Projects maxPadding={maxPadding} />
            <Connect />
        </section>
    );
}

export default LandingPage;
