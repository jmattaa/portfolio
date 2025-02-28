package admin

import (
	"net/http"
	"text/template"

	"github.com/jmattaa/portfolio/middleware"
)

func Setup(mux *http.ServeMux) {
	adminMux := http.NewServeMux()

    adminMux.HandleFunc("/", http.NotFound)
	adminMux.HandleFunc("/{$}", home)
    adminMux.HandleFunc("GET /writing", writing)
    adminMux.HandleFunc("POST /writing", writingPost)

	mux.Handle(
		"/admin/",
		http.StripPrefix("/admin", middleware.EnsureAdmin(adminMux)),
	)
}

func renderTemplate(w http.ResponseWriter, name string, data any) {
	templ, err := template.ParseFiles("admin/html/layout.html", name)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	err = templ.ExecuteTemplate(w, "layout", data)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}
