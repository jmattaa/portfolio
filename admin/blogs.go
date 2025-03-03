package admin

import (
	"database/sql"
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
	Errors      []string
	Title       string
	Description string
	Content     string
	Slug        string
	ID          int64
}

func blogForm(queries *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		props := BlogFormProps{}

		idstr := r.URL.Query().Get("id")
		if idstr != "" {
			var err error
			id, err := strconv.ParseInt(idstr, 10, 64)
			if err != nil {
				http.Error(w, "Invalid Blog ID", http.StatusBadRequest)
				return
			}

			blog, err := queries.GetBlog(r.Context(), id)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}

			props.Title = blog.Title
            props.Description = blog.Description.String
			props.Content = blog.Content
			props.Slug = blog.Slug
			props.ID = blog.ID
		}

		renderTemplate(w, "admin/html/blogsForm.html", props)
	}
}

func postBlog(queries *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		idstr := r.URL.Query().Get("id")
		title := r.FormValue("title")
		content := r.FormValue("content")
		slug := r.FormValue("slug")

		descriptionFormValue := r.FormValue("description")
		description := sql.NullString{
			String: descriptionFormValue,
			Valid:  descriptionFormValue != "",
		}

		errs := []string{}

		if title == "" {
			errs = append(errs, "Title is required")
		}
		// description can be empty

		if content == "" {
			errs = append(errs, "Content is required")
		}
		if slug == "" {
			errs = append(errs, "Slug is required")
		}

		if len(errs) > 0 {
			renderTemplate(w, "admin/html/blogsForm.html", BlogFormProps{
				Errors:      errs,
				Title:       title,
				Description: description.String,
				Content:     content,
				Slug:        slug,
			})

			return
		}

		// why is it 0 sometimes idk?? TODO CHECK THIS
		if idstr == "" || idstr == "0" {
			_, err := queries.CreateBlog(r.Context(), db.CreateBlogParams{
				Title:       title,
				Description: description,
				Content:     content,
				Slug:        slug,
			})
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
			}

			http.Redirect(w, r, "/admin/blogs", http.StatusSeeOther)
			return
		}

		id, err := strconv.ParseInt(idstr, 10, 64)
		if err != nil {
			http.Error(w, "Invalid Blog ID", http.StatusBadRequest)
			return
		}
		_, err = queries.UpdateBlog(r.Context(), db.UpdateBlogParams{
			ID:          id,
			Title:       title,
			Description: description,
			Content:     content,
			Slug:        slug,
		})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		http.Redirect(w, r, "/admin/blogs", http.StatusSeeOther)
	}
}
