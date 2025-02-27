package main

import (
	"log"
	"net/http"
	"os"

	"github.com/jmattaa/portfolio/middleware"

	_ "github.com/joho/godotenv/autoload"
)

func main() {
	mux := http.NewServeMux()

	fs := http.FileServer(http.Dir("./dist"))
	mux.Handle("/", fs)

	var handler http.Handler = mux
	if os.Getenv("DEV") == "true" {
		handler = middleware.Logger(handler)
	}

	log.Fatal(http.ListenAndServe(":"+os.Getenv("PORT"), handler))
}
