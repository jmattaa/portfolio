import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import MyWork from "./sections/MyWork";

const App = () => {
    return (
        <>
            <Nav />
            <Hero />
            <About />
            {/* add a separator here! */}
            <MyWork />
        </>
    )
};

export default App;
