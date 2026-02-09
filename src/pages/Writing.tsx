import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogType } from "../interfaces";
import { jmFormatDateStr } from "../utils";

const Writing = () => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<Error | null>(null);

    useEffect(() => {
        fetch("/api/writing", {
            headers: {
                "finfin-nyckel": import.meta.env.VITE_API_KEY
            },
            method: "GET"
        })
            .then(res => {
                if (!res.ok)
                    throw new Error(`HTTP error! Status: ${res.status}
                    ${res.statusText}`);
                return res.json();
            })
            .then(data => setBlogs(data))
            .catch(err => setErr(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">Writing</h1>

            {loading && <p>Loading...</p>}
            {err && <p className="text-red-500">{err.message}</p>}

            {!loading && !err && blogs.length === 0 && <p>No blog posts available.</p>}

            <div className="flex flex-col gap-4 mt-4">
                {blogs.map((blog) => (
                    <Link
                        className="no-underline!"
                        to={`/writing/${blog.Slug}`}
                        key={blog.Id}>
                        <div className="p-6 bg-palette-3/20 rounded-2xl 
                                        text-palette-5 hover:bg-palette-4/40
                                        hover:shadow-lg hover:scale-105
                                        transition-all duration-300">
                            <h2 className="text-2xl font-semibold mb-2">
                                {blog.Title}
                            </h2>
                            <p className="text-sm text-palette-5/80 mb-4">
                                {jmFormatDateStr(blog.CreatedAt.Time)}
                            </p>
                            {
                                blog.Description.Valid &&
                                <p>{blog.Description.String}</p>
                            }
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Writing;
