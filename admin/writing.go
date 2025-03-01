package admin

import (
	"net/http"

	"github.com/jmattaa/portfolio/db"
)

func writing(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "admin/html/writing.html", nil)
}

func writingPost(queries *db.Queries) http.HandlerFunc {
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
			renderTemplate(w, "admin/html/writing.html", struct {
				Errors  []string
				Title   string
				Content string
				Slug    string
			}{
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
