package admin

import "net/http"

func writing(w http.ResponseWriter, r *http.Request) {
	type props struct {
		Title string
	}

	renderTemplate(w, "admin/html/writing.html", props{
		Title: "writing",
	})
}
