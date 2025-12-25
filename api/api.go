package api

import (
	"net/http"

	"github.com/jmattaa/portfolio/db"
	"github.com/jmattaa/portfolio/middleware"
)

func Setup(mux *http.ServeMux, q *db.Queries) {
	apiMux := http.NewServeMux()

	apiMux.HandleFunc("/writing", writing(q))
	apiMux.HandleFunc("/writing/{slug}", getBlog(q))
	apiMux.HandleFunc("/writing/rss", Rss(q))

	// TODO maybe add extra middleware?
	apiMux.HandleFunc("/sendmail", sendEmail)

	mux.Handle("/api/", http.StripPrefix("/api", middleware.ApiKey(apiMux)))
}
