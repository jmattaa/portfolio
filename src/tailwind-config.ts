const conf = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "palette-1": "#d8f3dd",
            "palette-2": "#b2e6ba",
            "palette-3": "#8dd899",
            "palette-4": "#68ca77",
            "palette-5": "#43bc56",
            "black": "#000000",
        },
        extend: {
            dropShadow: {
                glow: [
                    "0 0px 20px rgba(255,255, 255, 0.35)",
                    "0 0px 65px rgba(255, 255,255, 0.2)"
                ]
            }
        }
    },
    plugins: [],
}

export default conf

