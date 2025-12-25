package api

import (
	"encoding/json"
	"encoding/xml"
	"net/http"
	"os"

	"github.com/jmattaa/portfolio/db"
)

func writing(q *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		blogs, err := q.ListBlogs(r.Context())
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		bytes, err := json.Marshal(blogs)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(bytes)
	}
}

func getBlog(q *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		slug := r.PathValue("slug")

		blog, err := q.GetBlogBySlug(r.Context(), slug)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		bytes, err := json.Marshal(blog)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write(bytes)
	}
}

type Item struct {
	Title string `xml:"title"`
	Link  string `xml:"link"`
	Desc  string `xml:"description"`
	Date  string `xml:"pubDate"`
}

type Channel struct {
	Title string  `xml:"title"`
	Link  string  `xml:"link"`
	Desc  string  `xml:"description"`
	Items []Item `xml:"item"`
}

func Rss(q *db.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		blogs, err := q.ListBlogs(r.Context())
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		channel := Channel{
			Title: "Portfolio",
			Link:  os.Getenv("HOST") + "/writing",
			Desc:  "Portfolio",
			Items: make([]Item, len(blogs)),
		}

		for i, blog := range blogs {
			date := "couldn't get a date hihi"
			if blog.CreatedAt.Valid {
				date = blog.CreatedAt.Time.Format("Mon, 02 Jan 2006 15:04:05 MST")
			}

			channel.Items[i] = Item{
				Title: blog.Title,
				Link:  os.Getenv("HOST") + "/writing/" + blog.Slug,
				Desc:  blog.Description.String,
				Date:  date,
			}
		}

		bytes, err := xml.Marshal(channel)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}

		w.Header().Set("Content-Type", "application/xml")
		w.WriteHeader(http.StatusOK)
		w.Write(bytes)
	}
}
