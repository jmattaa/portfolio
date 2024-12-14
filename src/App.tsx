import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import MyWork from "./sections/MyWork";

const App = () => {
    return (
        <>
            <Nav />
            <div className="lg:w-3/4 lg:absolute right-0 top-8">
                <Hero />
                <About />
                {/* add a separator here! */}
                <MyWork />
            </div>
        </>
    )
};

export default App;
