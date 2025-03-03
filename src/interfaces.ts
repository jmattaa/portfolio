
interface Project {
    name: string;
    url: string;
    description: string;
    tech: string[];
}

// TODO: can we do something to get this from the go?
interface BlogType {
    Title: string;
    Content: string;
    Slug: string;
    Description: { String: string, Valid: boolean }; // sql.NullString yeh
    CreatedAt: { Time: string };
    Id: number;
}


export { type Project, type BlogType };
