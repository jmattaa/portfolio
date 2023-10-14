import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const AboutMe = () => {
    return (
        <div className="mt-4 h-1/2 w-screen flex flex-col items-center">
            <AnimatedText
                className="text-3xl"
                text="About Me"
                y={-2}
                delay={1}
            />
            <div className="flex p-8">
                <div className="w-1/2">
                    <p>Hello I'm Jonathan</p>
                </div>

                <img
                    className="w-1/2 h-auto object-scale-down"
                    src="/img/aboutme.png"
                    alt="me"
                />
            </div>
        </div>
    );
};

export default AboutMe;

