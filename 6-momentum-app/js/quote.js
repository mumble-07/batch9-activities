let randombtnQ = document.getElementById("buttonQ");
let output = document.getElementById("quote-here");

/*  */

let quotes = [
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown'
    ];

randombtnQ.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})

let addQ = document.getElementById("inputQ");
let btnQ = document.getElementById("addQuotebtn");


btnQ.addEventListener('click', function(event){
    event.preventDefault();
    let newQ = addQ.value;
    quotes.push(newQ);
    output.innerText = `${newQ}`;
    addQ.value=" ";
})

console.log(output);