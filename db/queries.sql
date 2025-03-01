-- name: ListBlogs :many
SELECT * FROM Blogs ORDER BY created_at;

-- name: GetBlog :one
SELECT * FROM Blogs WHERE id = ?;

-- name: CreateBlog :one
INSERT INTO Blogs (title, content, slug) 
VALUES (?, ?, ?)
RETURNING *;
