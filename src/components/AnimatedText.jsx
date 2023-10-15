import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedText = ({ text, delay, className, x, y }) => {
    const controls = useAnimation();

    useEffect(() => {
        const animateText = async () => {
            await new Promise((resolve) => setTimeout(resolve, delay * 1000));
            await controls.start('visible');
        };

        animateText();

        // eslint-disable-next-line
    }, []);

    const variants = {
        hidden: {
            opacity: 0,
            y: y,
            x: x,
        },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: .2,
                delay: index * .1,
            },
        }),
    };

    return (
        <motion.div className={className} initial="hidden" animate={controls}>
            {text.split("").map((char, index) => (
                char !== " " ? (
                    <motion.span
                        key={index}
                        style={{ display: 'inline-block' }}
                        custom={index} // Pass index as a custom prop
                        variants={variants}
                    >
                        {char}
                    </motion.span>) :
                <span key={index}>{" "}</span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;

