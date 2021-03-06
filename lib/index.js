function enableSearch() {
  const searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", produceResults);
}

function produceResults() {
  event.preventDefault();
  const searchField  = document.querySelector(".search-text");
  populatePage(searchField.value);
}

function populatePage(query) {
  const api_key = "1AV3Uj2MawL0aSVK59Z7oA0vE6OjtZ3z";
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${query}`)
    .then(response => response.json())
    .then(response => {
      fillHTML(response);
    });
}

function fillHTML(response) {
  document.querySelector(".search-results").innerHTML = createHTML(response);
  assignCopyLinks();
}

function assignCopyLinks() {
  const gifs = document.getElementsByClassName("gif-holder");
  for(let gif of gifs) {
    gif.addEventListener("click", copyLink);
  }
}

function copyLink() {
  const copyText = this.getElementsByTagName("img")[0].src;
  navigator.clipboard.writeText(copyText)
    .then(() => {
      alert("Copied URL to Clipboard");
    })
    .catch(err => {
      alert("Something went wrong");
    });
}

enableSearch();
