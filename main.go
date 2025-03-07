package main

import (
	"database/sql"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/jmattaa/portfolio/admin"
	"github.com/jmattaa/portfolio/api"
	"github.com/jmattaa/portfolio/db"
	"github.com/jmattaa/portfolio/middleware"

	_ "github.com/joho/godotenv/autoload"
	_ "github.com/mattn/go-sqlite3"
)

func main() {
	dbSource := os.Getenv("DB_SOURCE")
	database, err := sql.Open("sqlite3", dbSource)
	defer database.Close()

	if err != nil {
		log.Fatal(err)
	}

	if err := database.Ping(); err != nil {
		log.Fatal(err)
	}

    queries := db.New(database)

	mux := http.NewServeMux()

	fs := http.FileServer(http.Dir("./dist"))
	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		_, err := os.Stat(filepath.Join("./dist", r.URL.Path))
		if err != nil || os.IsNotExist(err) {
			// react router takes care
			http.ServeFile(w, r, "./dist/index.html")
		} else {
			// static files
			fs.ServeHTTP(w, r)
		}
	})

	api.Setup(mux, queries)
	admin.Setup(mux, queries)

	var handler http.Handler = mux
	if os.Getenv("DEV") == "true" {
		handler = middleware.Logger(handler)
	}

	log.Printf("Listening on port %s", os.Getenv("PORT"))
	log.Fatal(http.ListenAndServe(":"+os.Getenv("PORT"), handler))
}
