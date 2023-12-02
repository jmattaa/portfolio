import { useState } from 'react';
import conf from '../tailwind-config';

function Nav() {
    const [menuState, setMenuState] = useState(false);

    const toggleBurger = () => {
        setMenuState(!menuState); // toggle menu
    }

    const navLinks = [
        ['Home', '#'],
        ['About me', '#'],
        ['My work', '#'],
    ];

    const navContent = (
        <>
            {navLinks.map(([title, url], i) => (
                <a href={url} key={i} className='relative text-palette-5
                                                  after:content-[""] 
                                                  after:flex after:absolute
                                                  after:bottom-0 after:left-0 
                                                  after:w-full after:h-[.1em] 
                                                  after:bg-palette-5 after:opacity-0 
                                                  after:scale-x-0 after:origin-left
                                                  after:transition-[opacity,transform]
                                                  after:duration-300 
                                                  hover:after:opacity-100
                                                  hover:after:scale-x-[1]'>
                    {title}
                </a>
            ))}
            <a href='#' className='link'>
                <button
                    className='px-6 py-2 border rounded text-palette-1 
                                bg-palette-4 border-palette-4'>
                    Contact me
                </button>
            </a>
        </>
    );

    return (
        <header className='flex items-center justify-center fixed py-6 
                            w-full bg-palette-1 shadow-md lg:shadow-none'>
            <div
                className='flex items-center justify-between w-1/3 p-3 
                            lg:border lg:rounded-3xl lg:w-2/3'>
                <div className='text-lg font-bold text-palette-5'>
                    <a href='/'>jmataa</a>
                </div>

                <div
                    className='hidden space-x-12 items-center lg:flex'>
                    {navContent}
                </div>
                <div className='lg:hidden' onClick={
                    () => toggleBurger()}>
                    <svg width='32px' height='32px' viewBox='0 0 24 24'
                        fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5 8H13.75M5 12H19M10.25 16L19 16'
                            stroke={conf.theme.colors['palette-5']}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>

                    <div className={`
                        flex flex-col items-center justify-center z-50
                        fixed top-0 left-0 w-full h-0 bg-palette-2
                        transition-[height,opacity] duration-200
                        ${menuState ?
                            'flex !h-screen opacity-90' :
                            'opacity-0 h-0 pointer-events-none'
                        }
                    `}>
                        <div className='w-full h-full flex flex-col items-center 
                                        justify-center [&>*]:my-6'>
                            {navContent}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Nav;
