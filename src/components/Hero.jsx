import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function Hero() {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <motion.div
                className="w-[200vw] absolute h-full bg-black"
                initial={{
                    borderRadius: '100%',
                    translateY: '150vh',
                    translateX: '-50vw',
                }}
                animate={{
                    borderRadius: 0,
                    translateY: 0,
                }}
                transition={{ duration: 1 }}
            >
            </motion.div>

            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
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
                    delay={1.5}
                    x={-15}
                    y={15}
                />
            </div>
        </div>
    );
}

