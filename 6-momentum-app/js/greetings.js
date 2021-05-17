let yourName = document.querySelector(".name");
let getName = yourName.querySelector(".input");
let sbmt = document.getElementById ("submit");
let greet = document.querySelector("greetings");




sbmt.addEventListener('click', () => {
  greet.innerText = greet.value;
});


function showGreeting(){
  greet.innerText = `Hello, ${getName}`;
}









/* let yourName = document.querySelector(".name");
let input = yourName.querySelector("input");
let greetings = document.querySelector(".greetings"); */


/* yourName.addEventListener("submit", function getName) {
    console.log
} */
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

show();
 */

/* 
const createName = () => {
  // inputNameForm.style.display = "block !important"
  inputNameForm.addEventListener("submit", event => {
    event.preventDefault()
    //read input
    state.name = document.querySelector(".name").value
    saveState()
    inputNameForm.reset()
    console.log(state.name)
    //set name in greeting
    createGreeting()
    createFocus()
  })
}*/
