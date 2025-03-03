-- name: ListBlogs :many
SELECT * FROM blogs ORDER BY created_at;

-- name: GetBlog :one
SELECT * FROM blogs WHERE id = ?;

-- name: GetBlogBySlug :one
SELECT * FROM blogs WHERE slug = ?;

-- name: CreateBlog :one
INSERT INTO blogs (
    title, 
    content, 
    slug,
    description
) 
VALUES (?, ?, ?, ?)
RETURNING *;

-- name: UpdateBlog :one
UPDATE blogs SET
    title = ?,
    description = ?,
    content = ?,
    slug = ?
WHERE id = ?
RETURNING *;

-- name: DeleteBlog :exec
DELETE FROM blogs WHERE id = ?;
