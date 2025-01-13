import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import React from "react";
import AnimatedLayout from "./components/AnimatedLayout";

export const routes = {
    Home: {
        name: 'home',
        path: '/',
        element: <AnimatedLayout>{React.createElement(Home)}</AnimatedLayout>,
    },
    Projects: {
        name: 'projects',
        path: '/projects',
        element: <AnimatedLayout>{React.createElement(Projects)}</AnimatedLayout>,
    },
    Writing: {
        name: 'writing',
        path: '/writing',
        element: <AnimatedLayout>{React.createElement(Writing)}</AnimatedLayout>,
    },
}
