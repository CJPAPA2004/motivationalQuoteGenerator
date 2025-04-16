const quotes = [
    {quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt"},
    {quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt"},
    {quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius"},
    {quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer"},
    {quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
    {quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky"},
    {quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon"},
    {quote: "Get busy living or get busy dying.", author: "Stephen King"},
    {quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy"},
    {quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt"},
    {quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins"},
    {quote: "Act as if what you do makes a difference. It does.", author: "William James"},
    {quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau"},
    {quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser"},
    {quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    {quote: "The future depends on what you do today.", author: "Mahatma Gandhi"},
    {quote: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou"},
    {quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson"},
    {quote: "The best way to predict the future is to create it.", author: "Peter Drucker"},
    {quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs"},
    {quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh"},
    {quote: "You only live once, but if you do it right, once is enough.", author: "Mae West"},
    {quote: "In the end, we only regret the chances we didn’t take.", author: "Lewis Carroll"},
]

function getRandomQuote(){
    const numQuotes = quotes.length;
    const index = Math.floor(Math.random() * numQuotes);
    const randomQuote = quotes[index]

    //Update the quote and author in the HTML
    document.querySelector('.quote').textContent = `"${randomQuote.quote}"`;
    document.querySelector('.author').textContent = randomQuote.author;

}

document.querySelector('.button').addEventListener('click', getRandomQuote);