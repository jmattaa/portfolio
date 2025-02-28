package admin

import "net/http"

func writing(w http.ResponseWriter, r *http.Request) {
	renderTemplate(w, "admin/html/writing.html", nil)
}
