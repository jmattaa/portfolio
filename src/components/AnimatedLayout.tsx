import { motion } from "framer-motion";

const pageVariants = {
    hidden: { opacity: .6, scale: 0.8, filter: "blur(2px)" },
    enter: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
};

export default function AnimatedLayout(
    { children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5, type: "easeInOut" }}
            className="relative"
        >
            {children}
        </motion.div>
    );
}
