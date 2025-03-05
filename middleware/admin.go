package middleware

import (
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"net/http"
	"os"
	"strings"
)

func EnsureAdmin(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if !isAuthenticated(r) {
			w.Header().Set("WWW-Authenticate", "Basic")
			http.Error(w, "Unauthorized", http.StatusUnauthorized)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func isAuthenticated(r *http.Request) bool {
	authHeader := r.Header.Get("Authorization")
	if authHeader == "" {
		return false
	}

	if !strings.HasPrefix(authHeader, "Basic ") {
		return false
	}

	encodedCredentials := strings.TrimPrefix(authHeader, "Basic ")
	decoded, err := base64.StdEncoding.DecodeString(encodedCredentials)
	if err != nil {
		return false
	}

	credentials := string(decoded)
	headerParts := strings.Split(credentials, ":")
	if len(headerParts) != 2 {
		return false
	}

	username, password := headerParts[0], headerParts[1]
	return username == os.Getenv("ADMIN_USER") && isValidPassword(password)
}

func isValidPassword(pass string) bool {
	hash := sha256.Sum256([]byte(pass))
	return fmt.Sprintf("%x", hash) == os.Getenv("ADMIN_PASS")
}
