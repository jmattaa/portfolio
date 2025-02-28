package admin

import "net/http"

func writing(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "admin/html/writing.html", nil)
}

func writingPost(w http.ResponseWriter, r *http.Request) {
	title := r.FormValue("title")
	content := r.FormValue("content")

	errs := []string{}

	if title == "" {
		errs = append(errs, "Title is required")
	}
	if content == "" {
		errs = append(errs, "Content is required")
	}

	if len(errs) > 0 {
		renderTemplate(w, "admin/html/writing.html", struct {
			Errors []string
		}{
			Errors: errs,
		})

		return
	}

	println(title, content)
}
