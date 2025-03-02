-- name: ListBlogs :many
SELECT * FROM blogs ORDER BY created_at;

-- name: GetBlog :one
SELECT * FROM blogs WHERE id = ?;

-- name: CreateBlog :one
INSERT INTO blogs (
    title, 
    content, 
    slug
) 
VALUES (?, ?, ?)
RETURNING *;

-- name: UpdateBlog :one
UPDATE blogs SET
    title = ?,
    content = ?,
    slug = ?
WHERE id = ?
RETURNING *;
