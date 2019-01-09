const pry = require('pryjs')

const Nightmare = require('nightmare')
const assert = require('chai').assert;
const expect = require('chai').expect;
const htmlGenerator  = require("../lib/htmlGenerator.js");

describe("Homepage", function() {
  it("Has search bar", function(done) {
    this.timeout('10s')
    const nightmare = Nightmare()
    nightmare
      .goto('file:///Users/bghalami/turing/4module/mod4_thc/index.html')
      .evaluate(() => document.querySelector('.search-text').name)
      .end()
      .then(name => {
        expect(name).to.equal('search-field')
        done()
      });
  });

  it("Has search button", function(done) {
    this.timeout('10s')
    const nightmare = Nightmare()
    nightmare
      .goto('file:///Users/bghalami/turing/4module/mod4_thc/index.html')
      .evaluate(() => document.querySelector('.search-button').value)
      .end()
      .then(value => {
        expect(value).to.equal('Search')
        done()
      });
  });

  it("Creates gifs equal to amount of gifs in response", function() {
    const response = {data: [ {id: 1}, {id: 2}, {id: 3} ] };
    const answer = `<div id="1" class="gif-holder">
                      <img class="img-1" src="https://i.giphy.com/media/1/giphy.gif" alt="A Gif" />
                      <div class="middle">
                        <div class="text text-1">Copy Link!</div>
                      </div>
                    </div>
                    <div id="2" class="gif-holder">
                      <img class="img-2" src="https://i.giphy.com/media/2/giphy.gif" alt="A Gif" />
                      <div class="middle">
                        <div class="text text-2">Copy Link!</div>
                      </div>
                    </div>
                    <div id="3" class="gif-holder">
                      <img class="img-3" src="https://i.giphy.com/media/3/giphy.gif" alt="A Gif" />
                      <div class="middle">
                        <div class="text text-3">Copy Link!</div>
                      </div>
                    </div>`
    assert(htmlGenerator.createHTML(response), answer);
  });
});
