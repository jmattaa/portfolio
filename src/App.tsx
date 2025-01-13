import { useLocation, useOutlet } from "react-router-dom";
import Nav from "./components/Nav";
import { AnimatePresence } from "framer-motion";
import React from "react";
import AnimatedLayout from "./components/AnimatedLayout";

function AnimatedOutlet() {
    const location = useLocation();
    const element = useOutlet();

    return (
        <AnimatePresence mode="wait" initial={true}>
            {element && React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
    );
}


const App = () => {
    return (
        <>
            <Nav />
            <AnimatePresence mode="wait" initial={true}>
                <AnimatedLayout>
                    <div className="lg:w-3/4 lg:absolute right-0 top-8">
                        <AnimatedOutlet />
                    </div>
                </AnimatedLayout>
            </AnimatePresence>
        </>
    );
};

export default App;
