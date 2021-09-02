const searchBook = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("total").innerText = data.numFound;
      return displapySearchResult(data.docs);
    });
};

const displapySearchResult = (book) => {
  // Erroe handiling
  if (book == 0) {
    const dis = document.getElementById("error");
    dis.style.display = "block";
    dis.style.marginTop = "20px";
    dis.style.color = "red";
  } else {
    document.getElementById("error").style.display = "none";
  }
  const searchResult = document.getElementById("search-result");
  searchResult.textContent = "";
  book.forEach((books) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
           <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-L.jpg" class="card-img-top" alt="...">
           <div class="card-body">
           <h1 class="card-title"> Book Name ${books.title}</h1>
           <h3 class="card-title"> Athore Name ${books.author_name}</h3>
           <h4 class="card-title"> publisher Name ${books.publisher}</h4>
           <h5 class="card-title"> First Publish Year${books.first_publish_year}</h5>
           </div>
        </div> `;
    searchResult.appendChild(div);
  });
};
