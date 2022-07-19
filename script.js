

// grab elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');

let apiQuotes = [];

// show new quote
function getNewQuote() {
    // get random quote
    const quote = apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
    // in cases of a listed author set as author given
    authorText.textContent = quote.author;
    // in cases of null author set as unknown
    if(!quote.author) {
        authorText.textContent = 'unknown';
    }
    // set quote quote given
    quoteText.textContent = quote.text;

    if(quote.text.length > 65) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote');
    }
}

// get quotes from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        getNewQuote();
    } catch (error) {
        console.log(error);
    }
}

// on load
getQuotes();

