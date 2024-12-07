import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const Hero = () => {
    return (
        <motion.section
            className="container mx-auto flex flex-col 
                        h-full justify-center items-center py-12 sm:py-24"
            initial={{ translateY: "10vh", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
        >
            <div className="justify-center items-center flex-col mb-10 w-11/12 
                            md:w-1/2 lg:flex">
                <h1 className="text-2xl text-center text-palette-3 
                                lg:text-4xl xl:text-5xl">
                    <AnimatedText
                        text="Helloz I am"
                        x={15}
                        y={15}
                    />
                    <div>
                        <AnimatedText
                            text="Jmattaa"
                            expandedText="Jonathan Matta"
                            x={0}
                            y={5}
                        />
                    </div>
                </h1>
            </div>

            <div className="text-xs">
                (try to hover the{" "}
                <AnimatedText
                    text="bold text"
                    expandedText="try now to hover ↑"
                    x={-5}
                    y={15}
                />)
            </div>
        </motion.section>
    )
};

export default Hero; 
