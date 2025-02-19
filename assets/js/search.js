// fetch("/search.json")
//   .then(response => response.json())
//   .then(docs => {
//     const idx = lunr(function () {
//       this.ref("url");
//       this.field("title");
//       this.field("content");

//       docs.forEach(doc => this.add(doc));
//     });

//     document.getElementById("search-box").addEventListener("input", function () {
//       let query = this.value.trim();
//       let results = idx.search(query);
//       let resultsList = document.getElementById("results");

//       resultsList.innerHTML = "";
//       if (query.length > 1) {
//         results.forEach(result => {
//           let doc = docs.find(d => d.url === result.ref);
//           let li = document.createElement("li");
//           li.innerHTML = `<a href="${doc.url}">${doc.title}</a>`;
//           resultsList.appendChild(li);
//         });
//       }
//     });
//   });


  document.getElementById("search-box").addEventListener("input", function () {
    let query = this.value.toLowerCase();
    let resultsList = document.getElementById("searchResults");
    resultsList.innerHTML = ""; // Clear previous results

    fetch("/search.json")
      .then(response => response.json())
      .then(data => {
        let filteredResults = data.pages.filter(page =>
          page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)
        );

        filteredResults.forEach(result => {
          let li = document.createElement("li");
          li.innerHTML = `<a href="${result.url}">${result.title}</a>`;
          resultsList.appendChild(li);
        });
      })
      .catch(error => console.error("Error fetching search data:", error));
  });
