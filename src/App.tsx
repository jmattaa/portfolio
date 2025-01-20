import { useLocation, useOutlet } from "react-router-dom";
import Nav from "./components/Nav";
import { AnimatePresence } from "framer-motion";
import React from "react";

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
                <div className="lg:w-3/4 lg:absolute right-0">
                    <AnimatedOutlet />
                </div>
            </AnimatePresence>
        </>
    );
};

export default App;
