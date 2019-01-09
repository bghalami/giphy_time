function createHTML(response) {
  let html = ``;
  for(i = 0; i < response.data.length; i++) {
    html += `<div id="${response.data[i].id}" class="gif-holder">
                <img class="img-${i}" src="https://i.giphy.com/media/${response.data[i].id}/giphy.gif" alt="A Gif" />
              <div class="middle">
                <div class="text text-${i}">Copy Link!</div>
              </div>
            </div>`
  }
  return html;
}

module.exports.createHTML = createHTML;
