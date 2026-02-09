import { useLocation, useOutlet } from "react-router-dom";
import Nav from "./components/Nav";
import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

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
    // UNTIL CSS RANDOM IS SUPPORTED WE HAVE TO DO TS 😭
    useEffect(() => {
        const marks = document.querySelectorAll('mark');
        marks.forEach(mark => {
            mark.style.animationDelay = (Math.random() * 2) + 's';
            mark.style.animationDirection = Math.random() < 0.5 ? 'reverse' : 'normal';
        });
    }, []);
    return (
        <>
            <AnimatePresence mode="wait" initial={true}>
                <Nav />
                <main className="lg:w-3/4 lg:absolute right-0">
                    <AnimatedOutlet />
                </main>
            </AnimatePresence>
        </>
    );
};

export default App;
