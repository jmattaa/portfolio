
function Hero() {
    return (
        <div className='container mx-auto flex flex-col 
                        h-screen justify-center items-center py-12 sm:py-24'>
            <div className='justify-center items-center flex-col mb-10 w-11/12 
                            md:w-1/2 lg:flex'>
                <h1 className='text-3xl text-center text-palette-3 
                                lg:text-5xl xl:text-6xl'>
                    Helloz I am{' '}
                    <span className='text-palette-5'>Jonathan{' '}</span>
                    Matta
                </h1>
                <p
                    className='mt-5 sm:mt-10 lg:w-10/12 text-palette-3 
                                text-center text-lg'
                >
                    A student who ... hihi dunno what else I do.
                    Gym is great! And
                    (neo)<span className='text-palette-5 font-bold'>vim</span>{' '}
                    to! And more gym is also good!!!
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <button
                    className='bg-transparent text-palette-5 font-semibold py-2 
                                px-4 border rounded transition-all duration-300
                                hover:bg-palette-3 hover:border-palette-5/0
                                hover:text-palette-1'>
                    Contact me
                </button>
            </div>
        </div>
    )
}

export default Hero; 
