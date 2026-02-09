import { motion } from "framer-motion";
import { useState } from "react";

const ProfileImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className="relative w-48 h-48 md:w-64 md:h-64 mx-auto"
                animate={{
                    rotate: isHovered ? [0, -10, 10, -10, 10, 0] : 0,
                }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}
            >
                {/* Glowing border effect */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-palette-5 via-palette-3 to-palette-5 opacity-75 blur-lg"
                    animate={{
                        scale: isHovered ? [1, 1.2, 1] : 1,
                        opacity: isHovered ? [0.75, 0.9, 0.75] : 0.75,
                    }}
                    transition={{
                        duration: 2,
                        repeat: isHovered ? Infinity : 0,
                        repeatType: "loop"
                    }}
                />

                {/* Main image container */}
                <motion.div
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-palette-3 shadow-2xl"
                    animate={{
                        scale: isHovered ? 1.05 : 1,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeOut"
                    }}
                >
                    <img
                        src="/assets/me.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay with text on hover */}
                    <motion.div
                        className="absolute inset-0 bg-palette-1 bg-opacity-80 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-palette-3 text-sm md:text-base font-medium px-4 text-center">
                            That's me!
                        </p>
                    </motion.div>
                </motion.div>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 md:w-3 md:h-3 bg-palette-5 rounded-full"
                        style={{
                            top: `${20 + i * 30}%`,
                            left: `${-10 + i * 15}%`,
                        }}
                        animate={{
                            y: isHovered ? [0, -20, 0] : 0,
                            opacity: isHovered ? [1, 0.5, 1] : 0.5,
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: isHovered ? Infinity : 0,
                            repeatType: "loop"
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
};

export default ProfileImage;
