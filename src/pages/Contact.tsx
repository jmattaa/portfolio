export default function Contact() {
    return (
        <div className="bg-black font-mono p-8 min-h-screen 
                        [&_input]:!text-palette-1
                        [&_textarea]:!text-palette-1">
            <h1 className="xl font-bold mb-6">Contact Me</h1>
            <div className="mt-4 flex">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-palette-1">&gt;</span> Name:
                </div>
                <input
                    type="text"
                    placeholder="jmattaa..."
                    className="bg-palette-1/0 border-none outline-none w-full p-2"
                />
            </div>
            <div className="mt-4 flex">
                <div className="flex items-center justify-between gap-2">
                    <span className="text-palette-1">&gt;</span> Email:
                </div>
                <input
                    type="email"
                    placeholder="jmattaa@something.yeh"
                    className="bg-palette-1/0 border-none outline-none 
                    w-full p-2"
                />
            </div>
            <div className="mt-4">
                <div>
                    <span className="text-palette-1">&gt;</span> Message:
                </div>
                <textarea
                    placeholder="Tell me something"
                    className="bg-palette-1/0 border-none outline-none 
                                w-full p-2 h-32 focus:outline-palette-5
                                transition-all"
                ></textarea>
            </div>
            <div className="mt-6">
                <button className="bg-palette-4 text-palette-1 px-4 py-2 
                                    rounded transition hover:bg-palette-5">
                    Submit
                </button>
            </div>
        </div>
    );
}

