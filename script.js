let apiQuotes = [];   // use let if value changes, and const if value does not change

// Show New Quote
function newQuote() {
  // pick random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes from API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';

  try {
    const response = await fetch(apiUrl);   // wait for fetch before setting response value
    apiQuotes = await response.json();
    newQuote();
  } catch(err) {
    // Handle Error
  }
}

// On Load
getQuotes();