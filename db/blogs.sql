-- name: ListBlogs :many
SELECT * FROM Blogs

-- name : GetBlog :one
SELECT * FROM Blogs WHERE id = ?

-- name : CreateBlog :one
INSERT INTO Blogs (title, content, created_at) VALUES (?, ?, )
