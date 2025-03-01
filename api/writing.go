package api

import (
	"encoding/json"
	"net/http"

	"github.com/jmattaa/portfolio/db"
)

func writing(queries *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
        blogs, err := queries.ListBlogs(r.Context())
        if err != nil {
            panic(err)
        }
        w.Header().Set("Content-Type", "application/json")
        w.WriteHeader(http.StatusOK)

        bytes, err := json.Marshal(blogs)
        if err != nil {
            panic(err)
        }
        w.Write(bytes)
	}
}
