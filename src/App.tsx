import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
    return (
        <>
            <Nav />
            <div className="lg:w-3/4 lg:absolute right-0 top-8">
                <Hero />
                <About />
            </div>
        </>
    )
};

export default App;
