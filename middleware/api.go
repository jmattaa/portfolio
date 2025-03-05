package middleware

import (
	"net/http"
	"os"
	"strings"

	_ "github.com/joho/godotenv/autoload"
)

const meFeelingGoodMsg = "This is purely to make me feel good, feel free to take this as a challange to acess the api, if you acess it please contact me 🔥"

func ApiKey(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		apiKey := strings.TrimSpace(r.Header.Get("finfin-nyckel"))
		if apiKey != os.Getenv("API_KEY") {
			http.Error(w, meFeelingGoodMsg, http.StatusUnauthorized)
			return
		}

		next.ServeHTTP(w, r)
	})
}
