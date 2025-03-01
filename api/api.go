package api

import (
	"net/http"

	"github.com/jmattaa/portfolio/db"
	"github.com/jmattaa/portfolio/middleware"
)

func Setup(mux *http.ServeMux, queries *db.Queries) {
	apiMux := http.NewServeMux()

	apiMux.HandleFunc("/writing", writing(queries))

	mux.Handle("/api/", http.StripPrefix("/api", middleware.ApiKey(apiMux)))
}
