package admin

import (
	"net/http"

	"github.com/jmattaa/portfolio/middleware"
)

func Setup(mux *http.ServeMux) {
	adminMux := http.NewServeMux()

	adminMux.HandleFunc("/", home)

	mux.Handle(
		"/admin/",
		http.StripPrefix("/admin", middleware.EnsureAdmin(adminMux)),
	)
}

func home(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("Admin Home"))
}
