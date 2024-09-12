import { motion } from "framer-motion";
import { useState } from "react";
import conf from "../tailwind-config";

const Nav = () => {
    const [menuState, setMenuState] = useState(false);

    const toggleBurger = () => {
        setMenuState(!menuState); // toggle menu
    }

    const navLinks = [
        ["About me", "#about-section"],
        ["My work", "#projects-section"],
    ];

    const navContent = (
        <>
            {navLinks.map(([title, url], i) => (
                <motion.a
                    href={url}
                    key={i}
                    className='relative text-palette-3
                                hover:text-palette-5       
                                duration-500
                                transition-[font]
                                after:content-[""] 
                                after:flex after:absolute
                                after:bottom-0 after:left-0 
                                after:w-full after:h-[.1em] 
                                after:bg-palette-5 after:opacity-0 
                                after:scale-x-0 after:origin-left
                                after:transition-[opacity,transform]
                                after:duration-300 
                                hover:after:opacity-100
                                hover:after:scale-x-[1]'
                    onMouseEnter={(e) => {
                        e.target.style.
                            fontVariationSettings =
                            '"MONO" 0, "CASL" 1, "wght" 900, "slnt" 1, "CRSV" 1';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.
                            fontVariationSettings =
                            '"MONO" var(--mono), "CASL" var(--casl), "wght" var(--wght), "slnt" var(--slnt), "CRSV" var(--CRSV)';
                    }}
                    initial={{ translateY: "5vh", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: (i + 1) * .15 }}
                >
                    {title}
                </motion.a>
            ))}
            <motion.a
                href="#"
                className="link"
            >
                <motion.button
                    className="px-6 py-2 border rounded text-palette-1 
                                bg-palette-4 border-palette-4"
                    initial={{ translateY: "5vh", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: (navLinks.length + .6) * .15 }}
                >
                    Contact me
                </motion.button>
            </motion.a>
        </>
    );

    return (
        <motion.nav
            className="flex items-center justify-center fixed py-6 z-50
                            w-full shadow-md bg-palette-1/10 backdrop-blur-sm
                            lg:shadow-none lg:backdrop-filter-none"
            initial={{ translateY: "-50vh", opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{
                duration: .255,
                type: "spring",
                stiffness: 250,
                damping: 20,
            }}
        >
            <div
                className="flex items-center justify-between w-1/3 p-3 
                            lg:border lg:rounded-3xl lg:w-2/3 
                            lg:backdrop-blur-sm">
                <motion.div
                    className="text-lg font-bold text-palette-5"
                    initial={{ translateY: "-5vh", opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: .244 }}
                >
                    <a href="/">jmattaa</a>
                </motion.div>

                <div
                    className="hidden space-x-12 items-center lg:flex">
                    {navContent}
                </div>
                <div className="lg:hidden" onClick={
                    () => toggleBurger()}>
                    <svg width="32px" height="32px" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 8H13.75M5 12H19M10.25 16L19 16"
                            stroke={conf.theme.colors["palette-5"]}
                            strokeLinecap="round"
                        />
                    </svg>

                    <div className={`
                        flex flex-col items-center justify-center z-50
                        fixed top-0 left-0 w-full h-0 bg-palette-2
                        transition-[height,opacity] duration-200
                        ${menuState ?
                            "flex !h-screen opacity-90" :
                            "opacity-0 h-0 pointer-events-none"
                        }
                    `}>
                        <div className="w-full h-full flex flex-col items-center 
                                        justify-center [&>*]:my-6">
                            {navContent}
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
};

export default Nav;
