import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const AboutMe = () => {
    return (
        <div className="h-1/2 w-screen flex flex-col items-center">
            <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-4 p-8">
                <div className="order-last lg:order-first">
                    <AnimatedText
                        className="text-black text-4xl mb-2 lg:text-white"
                        text="About me"
                        delay={1}
                        y={20}
                    />
                </div>

                <motion.img
                    className="h-auto object-scale-down order-first lg:order-last"
                    src="/img/aboutme.png"
                    alt="me"
                    initial={{ opacity: 0, translateY: 30 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ delay: 2, duration: .4 }}
                />
            </div>
        </div>
    );
};

export default AboutMe;

