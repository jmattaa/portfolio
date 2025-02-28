package admin

import "net/http"

func home(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "admin/html/home.html", nil)
}

