package admin

import "net/http"

func home(w http.ResponseWriter, r *http.Request) {
	type props struct {
		Title string
	}

	renderTemplate(w, "admin/html/home.html", props{
        Title: "home",
	})
}

