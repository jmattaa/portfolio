import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
const Hero = () => {
    return (
        <div className="w-screen h-2/3 text-white">
            <motion.div
                className="w-[200vw] absolute h-2/3 bg-black"
                initial={{
                    borderRadius: '100%',
                    translateY: '-150vh',
                    translateX: '-50vw',
                }}
                animate={{
                    borderRadius: '20%',
                    translateY: 0,
                }}
                transition={{ duration: 1 }}
            >
            </motion.div>

            <div
                className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <AnimatedText
                    text="Helloz"
                    className="text-7xl"
                    delay={1}
                    x={15}
                    y={15}
                />
                <AnimatedText 
                    text="I'm Jonathan Matta"
                    delay={.8}
                    x={0}
                    y={-5}
                />
            </div>
        </div>
    );
}

export default Hero;

