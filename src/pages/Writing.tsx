import { useEffect, useState } from "react";

// TODO: can we do something to get this from the go?
interface Blog {
    Title: string;
    Content: string;
    Slug: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CreatedAt: { Time: string };
    Id: number;
}

const Writing = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
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

    console.log(blogs);

    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">Writing</h1>

            {loading && <p>Loading...</p>}
            {err && <p className="text-red-500">{err.message}</p>}

            {!loading && !err && blogs.length === 0 && <p>No blog posts available.</p>}

            <div className="flex flex-col gap-4 mt-4">
                {blogs.map((blog) => (
                    <div key={blog.Id} className="p-6 bg-palette-5/10 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-2">{blog.Title}</h2>
                        <p className="mb-4">{blog.Content}</p>
                        <p className="text-sm text-palette-5/50">{blog.CreatedAt.Time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Writing;
