import { motion } from "framer-motion";

const pageVariants = {
    initial: { opacity: .6, filter: "blur(10px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" },
};

export default function AnimatedLayout(
    { children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.5, type: "easeInOut" }}
            className="relative"
        >
            {children}
        </motion.div>
    );
}
