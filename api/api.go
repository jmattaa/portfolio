package api

import (
	"net/http"

	"github.com/jmattaa/portfolio/middleware"
)

func Setup(mux *http.ServeMux) {
	apiMux := http.NewServeMux()

	apiMux.HandleFunc("/writing", writing)

	mux.Handle("/api/", http.StripPrefix("/api", middleware.ApiKey(apiMux)))
}

func writing(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
    w.Write([]byte("Writing"))
}
