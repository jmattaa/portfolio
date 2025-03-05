import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogType } from "../interfaces";
import { jmFormatDateStr } from "../utils";

const BlogPage = () => {
    const { slug } = useParams();

    const [blog, setBlog] = useState<BlogType | null>(null);

    useEffect(() => {
        fetch(`/api/writing/${slug}`, {
            headers: {
                "finfin-nyckel": import.meta.env.VITE_API_KEY
            },
            method: "GET"
        }).then(res => {
            if (!res.ok)
                throw new Error(`HTTP error! Status: ${res.status}
                ${res.statusText}`);
            return res.json();
        }).then(data => setBlog(data));
    }, []);

    if (!blog)
        return <p>Loading...</p>;

    return (
        <div className="p-8 container mx-auto">
            <h1 className="text-4xl font-bold mb-6">{blog.Title}</h1>
            <p className="text-palette-5/80 mb-4">
                {jmFormatDateStr(blog.CreatedAt.Time)}
            </p>

            {/* TODO: render markdown? */}
            <p>{blog.Content}</p>
        </div>
    );
};

export default BlogPage;
