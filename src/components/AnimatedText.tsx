import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type AnimatedTextProps = {
    text: string,
    expandedText?: string,
    speed?: number,
    className?: string,
    x: number,
    y: number,
};

const AnimatedText = ({
    text,
    expandedText,
    speed = .1,
    className,
    x,
    y,
}: AnimatedTextProps) => {
    const [currentText, setCurrentText] = useState(text);
    const expandOnHover = expandedText != null;
    const controls = useAnimation();

    className = expandOnHover ?
        (className || "") + " font-bold text-palette-5" : className;

    const animateText = async (newText: string) => {
        await controls.start("hidden");
        setCurrentText(newText);
        await controls.start("visible");
    };

    useEffect(() => {
        animateText(currentText);
    }, [currentText]);

    const variants = {
        hidden: (index: number) => ({
            opacity: 0,
            x,
            y,
            transition: {
                duration: speed / 2,
                delay: index * (speed / 2),
            },
        }),
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: speed,
                delay: index * speed,
            },
        }),
    };

    return (
        <motion.span
            className="p-3"
            initial="hidden"
            animate={controls}
            onHoverStart={() => expandOnHover && animateText(expandedText)}
            onHoverEnd={() => expandOnHover && animateText(text)}
        >
            {currentText.split("").map((char, index) => (
                char !== " " ? (
                    <motion.span
                        className={className}
                        key={index}
                        style={{ display: "inline-block" }}
                        custom={index}
                        variants={variants}
                    >
                        {char}
                    </motion.span>
                ) : (
                    <span key={index}>{" "}</span>
                )
            ))}
        </motion.span>
    );
};

export default AnimatedText;

