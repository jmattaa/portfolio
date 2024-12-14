import { useState } from "react";
import conf from "../tailwind-config";

const Nav = () => {
    const [menuState, setMenuState] = useState(false);

    const toggleBurger = () => {
        setMenuState(!menuState); // toggle menu
    }

    const navLinks = [
        ["whoami?", "#about-section"],
        ["My work", "#projects-section"],
    ];

    const navContent = (
        <>
            {navLinks.map(([title, url], i) => (
                <a
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
                        const target = e.target as HTMLElement;
                        target.style.
                            fontVariationSettings =
                            '"MONO" 0, "CASL" 1, "wght" 900, "slnt" 1, "CRSV" 1';
                    }}
                    onMouseLeave={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.
                            fontVariationSettings =
                            '"MONO" var(--mono), "CASL" var(--casl), "wght" var(--wght), "slnt" var(--slnt), "CRSV" var(--CRSV)';
                    }}>
                    {title}
                </a>
            ))}
            <a
                href="#"
                className="link"
            >
                <button
                    className="px-6 py-2 border rounded text-palette-1 
                                bg-palette-4 border-palette-4 
                                hover:bg-palette-5 active:bg-palette-3">
                    Contact me
                </button>
            </a>
        </>
    );

    return (
        <nav className="sticky lg:fixed top-0 z-50 w-full 
                        shadow-md bg-palette-1/10 backdrop-blur-sm p-8 lg:w-1/3
                        lg:shadow-none lg:top-8 lg:backdrop-blur-none">
            <div
                className="flex justify-around items-center p-3 lg:flex-col 
                            lg:space-y-4">
                <div className="text-lg font-bold text-palette-5">
                    <a href="/">jmattaa</a>
                </div>

                <div className="hidden space-y-8 items-center justify-center 
                                flex-col lg:flex">
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
                        fixed top-0 left-0 w-full h-0 bg-palette-1
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
        </nav>
    );
};

export default Nav;
