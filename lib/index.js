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
  let html = ``;
  for(i = 0; i < response.data.length; i++) {
    html += `<div id="${response.data[i].id}" class="gif-holder">
              <img src="https://i.giphy.com/media/${response.data[i].id}/giphy.webp" alt="A Gif" />
              <div class="middle">
                <div class="text">Copy Link!</div>
              </div>
            </div>`
  }
  document.querySelector(".search-results").innerHTML = html;
}

enableSearch();
