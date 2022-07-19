

let apiQuotes = [];

// show new quote
function getNewQuote() {
    // get random quote
    const quote = apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
    console.log(quote);
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

