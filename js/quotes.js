const quotes = [
    {
        quote: "Don't dwell on the past"
    },
    {
        quote: "Believe in yorself"
    },
    {
        quote: "Seiez the day"
    },
    {
        quote: "No pain, No gain"
    },
    {
        quote: "Be brave"
    },
    {
        quote: "Time waits for no one"
    },
    {
        quote: "Life is all about timing"
    }
];

const quote = document.querySelector("#quote span:first-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
