package admin

import (
	"net/http"
	"strconv"

	"github.com/jmattaa/portfolio/db"
)

func blogs(queries *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		blogs, err := queries.ListBlogs(r.Context())
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		renderTemplate(w, "admin/html/blogs.html", struct {
			Blogs []db.Blog
		}{
			Blogs: blogs,
		})
	}
}

type BlogFormProps struct {
	Errors  []string
	Title   string
	Content string
	Slug    string
}

func blogForm(queries *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		props := BlogFormProps{}

		idstr := r.URL.Query().Get("id")
		id, err := strconv.ParseInt(idstr, 10, 64)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		blog, err := queries.GetBlog(r.Context(), id)
		if err == nil {
			props.Title = blog.Title
			props.Content = blog.Content
			props.Slug = blog.Slug
		}

		renderTemplate(w, "admin/html/blogsForm.html", props)
	}
}

// TODO HANDLE IF THE BLOG EXISTS
func postBlog(queries *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		title := r.FormValue("title")
		content := r.FormValue("content")
		slug := r.FormValue("slug")

		errs := []string{}

		if title == "" {
			errs = append(errs, "Title is required")
		}
		if content == "" {
			errs = append(errs, "Content is required")
		}
		if slug == "" {
			errs = append(errs, "Slug is required")
		}

		if len(errs) > 0 {
			renderTemplate(w, "admin/html/blogsForm.html", BlogFormProps{
				Errors:  errs,
				Title:   title,
				Content: content,
				Slug:    slug,
			})

			return
		}

		_, err := queries.CreateBlog(r.Context(), db.CreateBlogParams{
			Title:   title,
			Content: content,
			Slug:    slug,
		})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}
