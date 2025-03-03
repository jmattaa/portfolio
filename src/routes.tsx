import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import React from "react";
import AnimatedLayout from "./components/AnimatedLayout";
import Contact from "./pages/Contact";
import BlogPage from "./pages/Blog";

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
    Blog: {
        name: 'blog',
        path: '/writing/:slug',
        element: <AnimatedLayout>{React.createElement(BlogPage)}</AnimatedLayout>,
    },
    Contact: {
        name: 'contact',
        path: '/contact',
        element: <AnimatedLayout>{React.createElement(Contact)}</AnimatedLayout>,
    },
}
