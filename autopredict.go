package main

import (
	"fmt"
	"net/http"
	"time"
	"log"
	"io"
	"bytes"
	"net/url"
)

const ServerPort = "90"

func main() {
	fmt.Println(time.Now())
	fmt.Println("Starting server..")

	http.HandleFunc("/predictions", predictionsHandler)

	log.Fatal(http.ListenAndServe(":"+ServerPort, nil))
}

func readReader(reader io.Reader) *bytes.Buffer {
	buf := new(bytes.Buffer)
	_, err := buf.ReadFrom(reader)
	check(err)
	return buf
}

func predictionsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {
		termParam := r.URL.Query().Get("term")
		fmt.Println("Fetching: " + "http://suggestqueries.google.com/complete/search?client=chrome&q=" + url.PathEscape(termParam))

		resp, err := http.Get("http://suggestqueries.google.com/complete/search?client=firefox&q=" + url.PathEscape(termParam))
		check(err)
		defer resp.Body.Close()

		body := readReader(resp.Body)
		check(err)


		fmt.Println(body)

		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Write(body.Bytes())

	}
}

func check(e error) {
	if e != nil {
		log.Fatal(e)
	}
}
