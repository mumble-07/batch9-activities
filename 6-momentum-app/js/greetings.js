/* let nameCont = document.querySelector(".name"); */
let yourName = document.getElementById("input");
let btn = document.getElementById("submit");


btn.onclick = function nameSubmit (event) {
  event.preventDefault();
  let nameInput = yourName.value;
  let greetings=document.querySelector(".greetings");
  greetings.innerText = `Hello there ${nameInput}`;
  yourName.classList.toggle('hide');
  greetings.classList.toggle('show');
}

/* function hide(){
yourName.classList.toggle('hide');
}
 */


/* variableName.classList.toggle('show'); */


/* 
let inputUser="inputUser";
let showUser="showUser";

function saveName(text) {
    localStorage.setItem(inputUser, text);
}

function nameSubmit(event){
    event.preventDefault();
    let current=input.value;
    greet(current);
    saveName(current);
}

function askUser() { 
    yourName.classList.add(showUser);
    yourName.addEventListener("submit", nameSubmit);
} 

function showGreeting(text){
    yourName.classList.remove(showUser);
    greeting.classList.add(showUser);
    greetings.innerText = `Hello, ${text}`;
  }

function loadName(){
   let currentUser = localStorage.getItem(inputUser);
    if (currentUser === null){
      askUser();
    } else {
      showGreeting(currentUser);
    }
  }

function show(){
    loadName();
};

show(); */