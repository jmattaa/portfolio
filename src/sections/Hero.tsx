import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";

const Hero = () => {
    return (
        <motion.section
            className='container mx-auto flex flex-col 
                        h-screen justify-center items-center py-12 sm:py-24'
            initial={{ translateY: '10vh', opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
        >
            <div className='justify-center items-center flex-col mb-10 w-11/12 
                            md:w-1/2 lg:flex'>
                <h1 className='text-2xl text-center text-palette-3 
                                lg:text-4xl xl:text-5xl'>
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
                <p
                    className='mt-5 sm:mt-10 lg:w-10/12 text-palette-3 
                                text-center text-lg'
                >
                    Gym is great! And{" "}
                    <AnimatedText
                        text="vim"
                        expandedText="neovim"
                        x={0}
                        y={-5}
                        speed={.2}
                    />
                    {" "}
                    too! And more gym is also good!!!
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <button
                    className='bg-transparent text-palette-5 font-semibold py-2 
                                px-4 border rounded transition-all duration-300
                                hover:bg-palette-3 hover:border-palette-5/0
                                hover:text-palette-1'>
                    Contact me
                </button>
            </div>


            <div className="text-xs absolute top-1/4 left-0">
                (Hover the{" "}
                <AnimatedText
                    text="bold text"
                    expandedText="to see something cool"
                    x={-5}
                    y={15}
                />)
            </div>
        </motion.section>
    )
};

export default Hero; 
