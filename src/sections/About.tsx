import aboutMeData from "../data/aboutMe.json";

const About = () => {
    return (
        <section id="about-section">
            <div className="container mx-auto flex flex-col md:w-2/3">
                <h1 className="text-3xl text-center text-palette-3 mb-10
                            lg:text-5xl xl:text-6xl">
                    Who am I?
                </h1>

                <p className="leading-loose">
                    {aboutMeData.text}
                </p>
            </div>
        </section>
    )
};

export default About; 
