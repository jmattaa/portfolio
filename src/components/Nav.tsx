import conf from '../tailwind-config';

function Nav() {
    return (
        <header className='flex items-center justify-center fixed py-6 w-full'>
            <div
                className='flex items-center justify-between w-1/3 p-3 
                            lg:border lg:rounded-3xl lg:w-2/3'
            >
                <div className='text-lg font-bold text-palette-5'>
                    jmataa
                </div>

                <div
                    className='hidden space-x-12 items-center lg:flex'
                >
                    <a href='#'>Home</a>
                    <a href='#'>About me</a>
                    <a href='#'>My works</a>
                    <a href='#'>
                        <button
                            className='px-6 py-2 border rounded text-palette-1 
                                        bg-palette-3'
                        >
                            Contact me
                        </button>
                    </a>
                </div>

                <div className='lg:hidden'>
                    <svg width='32px' height='32px' viewBox='0 0 24 24'
                        fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M5 8H13.75M5 12H19M10.25 16L19 16'
                            stroke={conf.theme.colors['palette-5']}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Nav;
