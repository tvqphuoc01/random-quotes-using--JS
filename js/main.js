const colorBtn = document.querySelector('.btn');
const colorBg = document.querySelector('body');

const hexNumber = [0,1,2,3,4,5,6,'A','B','C','D','E','F'];
const quotes = [
        ["So many books, so little time.",
         "Frank Zappa"],
        ["Be yourself; everyone else is already taken.",
         "Oscar Wilde"],
        ["A room without books is like a body without a soul.",
         "Marcus Tullius Cicero"],
        ["You only live once, but if you do it right, once is enough.",
         "Mae West"],
        ["Be the change that you wish to see in the world.",
         "Mahatma Gandhi"],
        ["A room without books is like a body without a soul.",
         "Marcus Tullius Cicero"],
        ["We are all in the gutter, but some of us are looking at the stars.",
         "Oscar Wilde"],
        ["I have not failed. I've just found 10,000 ways that won't work.",
         "Thomas Edison"],
        ["Không làm mà muốn ăn thì chỉ có ăn c** ăn đ** b***",
         "Huấn Rose"],
        ["A woman is like a tea bag; you never know how strong it is until it's in hot water.",
         "Eleanor Roosevelt"],
    ];

const quotesBtn = document.querySelector('.btn');
const quote = document.querySelector('#text');
const quotesAuthor = document.querySelector('#author');
const quoteFas = document.querySelector('.fas');


colorBtn.addEventListener('click',changeColor);

function changeColor() {
    let randomCode = '#';
    for(let i = 0; i < 6; i++){
       let  random = Math.floor(Math.random()*hexNumber.length);
       randomCode += hexNumber[random];
    }
    colorBg.style.backgroundColor = randomCode;
    colorBtn.style.backgroundColor = randomCode;
    quote.style.color = randomCode;
    quotesAuthor.style.color = randomCode;
    quoteFas.style.color = randomCode;
}

quotesBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[number][0];
    quotesAuthor.textContent = quotes[number][1];
}