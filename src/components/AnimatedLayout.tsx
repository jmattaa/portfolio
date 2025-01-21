import { motion } from "framer-motion";

const pageVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.9, 
        rotateX: -15, 
        filter: "blur(10px)", 
        transformOrigin: "center" 
    },
    enter: { 
        opacity: 1, 
        scale: 1, 
        rotateX: 0, 
        filter: "blur(0px)", 
        transformOrigin: "center",
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: { 
        opacity: 0, 
        scale: 0.9, 
        rotateX: 15, 
        filter: "blur(5px)", 
        transformOrigin: "center",
        transition: {
            duration: 0.4,
            ease: [0.7, 0, 0.84, 0]
        }
    },
};

export default function AnimatedLayout(
    { children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            {children}
        </motion.div>
    );
}

