package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"net/mail"
	"net/smtp"
	"os"

	_ "github.com/joho/godotenv/autoload"
)

func sendEmail(w http.ResponseWriter, r *http.Request) {
	name := r.FormValue("name")
	email := r.FormValue("email")
	message := r.FormValue("message")

	errors := make(map[string]string)

	if name == "" {
		errors["name"] = "Name is required"
	}
	if email == "" {
		errors["email"] = "Email is required"
	}
	if message == "" {
		errors["message"] = "Message is required"
	}
	_, err := mail.ParseAddress(email)
	if err != nil {
		errors["email"] = "Invalid email format"
	}

	if len(errors) > 0 {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusBadRequest)

		json.NewEncoder(w).Encode(errors)
		return
	}

	auth := smtp.PlainAuth(
		"",
		os.Getenv("EMAIL"),
		os.Getenv("EMAIL_PASS"),
		os.Getenv("EMAIL_HOST"),
	)

	emailMsg := fmt.Sprintf(
		"To: %s\r\n"+
			"Subject: Message from personal website 🔥\r\n\r\n"+
            "Name: %s\r\n"+
			"Email: %s\r\n\r\n"+
			"%s",
		os.Getenv("EMAIL"), name, email, message,
	)

	err = smtp.SendMail(
		os.Getenv("SMTP_ADDR"),
		auth,
		email,
		[]string{os.Getenv("EMAIL")},
		[]byte(emailMsg),
	)

	if err != nil {
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusInternalServerError)

		json.NewEncoder(w).Encode(map[string]string{
			"message": "Failed to send email",
		})

		println(err.Error())
		return
	}

	w.WriteHeader(http.StatusOK)
}
