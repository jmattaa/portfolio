import AboutMeText from "../data/aboutMe";

const About = () => {
    return (
        <section id="about-section">
            <div className="mx-auto flex flex-col p-8 lg:p-24">
                <h1 className="text-3xl text-center text-palette-3 mb-10
                            lg:text-5xl xl:text-6xl">
                    Who am I?
                </h1>

                <AboutMeText />
            </div>
        </section>
    )
};

export default About; 
