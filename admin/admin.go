package admin

import (
	"net/http"
	"text/template"

	"github.com/jmattaa/portfolio/db"
	"github.com/jmattaa/portfolio/middleware"
)

func Setup(mux *http.ServeMux, queries *db.Queries) {
	adminMux := http.NewServeMux()

    adminMux.HandleFunc("/", http.NotFound)
	adminMux.HandleFunc("/{$}", home)
    adminMux.HandleFunc("GET /blogForm", blogForm(queries))
    adminMux.HandleFunc("POST /blogs", postBlog(queries))
    adminMux.HandleFunc("GET /blogs", blogs(queries))

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
