package middleware

import (
	"net/http"
	"os"
	"strings"

	_ "github.com/joho/godotenv/autoload"
)

func ApiKey(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		apiKey := strings.TrimSpace(r.Header.Get("finfin-nyckel"))
		if apiKey != os.Getenv("API_KEY") {
			http.Error(
				w,
				"This is purely to make me feel good there is nothing restricted through the api, feel free to take this as a challange to acess the api, if you acess it please contact me 🔥",
				http.StatusUnauthorized,
			)
			return
		}

		next.ServeHTTP(w, r)
	})
}

