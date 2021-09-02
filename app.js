const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value= '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res=>res.json())
     .then(data=>{
        document.getElementById('total').innerText = `${data.numFound||'NO'} Book Found`;
        return displapySearchResult(data.docs)
    })    
}

const displapySearchResult = book =>{   
    const searchResult = document.getElementById('search-result');
    searchResult.textContent='';
    book.forEach(books => {
        const div = document.createElement('div');
        div.classList.add('col')
            div.innerHTML = `
           <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-L.jpg" class="card-img-top" alt="...">
           <div class="card-body">
           <h1 class="card-title"> Book Name ${books.title}</h1>
           <h3 class="card-title"> Athore Name ${books.author_name}</h3>
           <h4 class="card-title"> publisher Name ${books.publisher}</h4>
           <h5 class="card-title"> Athore Name ${books.first_publish_year}</h5>
           </div>
        </div> `
        searchResult.appendChild(div);
    });
}








// const displapySearchResult = book =>{
//     console.count(book);
//     console.log(book)
//     const searchResult = document.getElementById('search-result') 
//     book.forEach(books => {
//         const div = document.createElement('div');
//         div.classList.add('col')
//             div.innerHTML = `
//            <img src="https://covers.openlibrary.org/b/id/${books.cover_i}-L.jpg" class="card-img-top" alt="...">
//            <div class="card-body">

//            <h5 class="card-title"> Athore Name ${books.author_name}</h5>
//            <h5 class="card-title"> publisher Name ${books.publisher}</h5>
//            <h5 class="card-title"> Athore Name ${books.first_publish_year}</h5>
//            </div>
//         </div>

//            `
       
//         searchResult.appendChild(div);
//     });
// }









































{/* <div class="card-body">
<h5 class="card-title"> Book Name ${books.title}</h5>
     <h5 class="card-title"> Athore Name ${books.author_name}</h5>
     <h5 class="card-title"> publisher Name ${books.publisher}</h5>
     <h5 class="card-title"> Athore Name ${books.first_publish_year}</h5>
     <h5 class="card-title"> Img Name ${books.cover_i}</h5>
    
</div> */}

















// const displaySearch = books =>{
//      console.log(books)
//     const searchResult = document.getElementById('search-result')
//     const div = document.createElement('div');
//      div.classList.add('col')
//      div.innerHTML = `
//              <div class="card-body">
//                  <h5 class="card-title"> Book Name ${books.title}</h5>
//                  <h5 class="card-title"> Athore Name ${books.author_name[0]}</h5>
//                  <h5 class="card-title"> publisher Name ${books.publisher[0]}</h5>
//                  <h5 class="card-title"> Athore Name ${books.first_publish_year}</h5>
//              </div>
//         `
//         searchResult.appendChild(div);

// }
