

// grab elements
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// shows loading with animation from css
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hides loading animation
function doneLoading() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}

// show new quote
function getNewQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
    authorText.textContent = quote.author;
    if(!quote.author) {
        authorText.textContent = 'unknown';
    }
    quoteText.textContent = quote.text;
    doneLoading();
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
        loading();
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        getNewQuote();
    } catch (error) {
        console.log(error);
    }
}

// tweet quotes
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -- ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteButton.addEventListener('click', getNewQuote);
twitterButton.addEventListener('click', tweetQuote);

// on load
getQuotes();


