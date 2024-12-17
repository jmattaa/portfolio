import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./sections/Nav";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Writing from "./pages/Writing";

const App = () => {
    return (
        <Router>
            <Nav />
            <div className="lg:w-3/4 lg:absolute right-0 top-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/writing" element={<Writing />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
