import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { routes } from "./routes.tsx";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: (
            <main className="w-screen h-screen overflow-hidden flex flex-col 
                            gap-5 justify-center items-center text-4xl">
                <div>
                    404 not found
                </div>
                <div>
                    <Link to="/" className="underline">go home</Link>
                </div>
            </main>
        ),
        children: Object.values(routes),
    },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
