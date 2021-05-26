let randombtnQ = document.getElementById("buttonQ");
let output = document.getElementById("quote-here");

/*  */

let quotes = [
    '"A bow and arrow is old-fashioned, but sometimes old ways are best." – Sova', 
    '"We are strong because we\'re together. Don\'t forget that." – Sova',
    '"If you\'re not a good shot today, don\'t worry. There are other ways to be useful." - Sova',
    '"Good. Keep your focus." - Omen',
    '"A warrior is known by his deeds, not his mouth. - Astra"',
    '"My plan may sound irrational, only \'cause you cannot see what I can!" - Astra',
    '"We saw the beginning and the continuation. Now... the end!" - Astra',
    '"Don\'t stop fighting\, you must keep going even if you\'re the only one." - Yoru',
    '"They think they put us in the dirt, they\'re gonna find out we weren\'t buried, just planted." - Skye',
    '"I believe in all of you like I believe in myself." - Sova',
    '"You were a boulder. I am a mountain!" -Sage'
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