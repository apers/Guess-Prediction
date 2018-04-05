export function fetchPredictions(searchTerm) {
  console.log("http://localhost:90/predictions?term=\"" + searchTerm + "\"");
  return fetch("http://localhost:90/predictions?term=\"" + searchTerm + "\"")
      .then((res) => res.json());
}