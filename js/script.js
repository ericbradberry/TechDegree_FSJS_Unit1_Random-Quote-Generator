/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
// const months = ["January", "February", "March", "April", "May", "June", "July"];
// let html = '';
let usedQuotes = '';
var quotes = [
  {
    quote: 'I am the walrus',
    source: 'The Beatles',
    citation: 'Album: Magical Mystery Tour',
    year: 1967,
  },
  {
    quote: 'Live and Let Die',
    source: 'Paul McCartney',
    citation: 'Time Life Books',
    year: 1968,
  },
  {
    quote: 'It\'s better to burn out than to fade away',
    source: 'Neil Young',
    citation: 'Album: This Note\'s for You',
    year: 1988,
  },
  {
    quote: 'I gotta say today was a good day',
    source: 'Ice Cube',
    citation: 'Album: The Predator',
    year: 1992,
  },
  {
    quote: 'Load up on guns and bring your friends',
    source: 'Kurt Cobain',
    citation: 'Album: Nevermind',
    year: 1991,
  }
];
/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
};

/*** 
 * Refreshing of quotes function
 * ***/

function refreshQuotes() {
  getRandomQuote();
  setInterval(getRandomQuote, 3000);
}

setTimeout(refreshQuotes, 2000);
  console.log("Page loaded", new Date());

/***
 * `printQuote` function
***/
function printQuote() {
  randomBG();
  let final = getRandomQuote();
  let html = "<p class='quote'>" + final.quote + "<p class='source'>" + final.source + "<p class='citation'>" + final.citation + "<p class='year'>" + final.year;

  document.getElementById('quote-box').innerHTML = html;
}

/*** 
 * Random Background Color function
 ***/

function randomBG() {
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);
  let color = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
  document.body.style.background = color;
  console.log(color);
}
randomBG();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

printQuote();
document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.body.style.background = randomBG();