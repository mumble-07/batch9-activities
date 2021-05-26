/* let nameCont = document.querySelector(".name"); */
let yourName = document.getElementById("input");
let btn = document.getElementById("submit");


/* btn.onclick = function nameSubmit (event) {
  event.preventDefault();
  let nameInput = yourName.value;
  let greetings=document.querySelector(".greetings");
  greetings.innerText = `Hello there ${nameInput}`;
  yourName.classList.toggle('hide');
  greetings.classList.toggle('show');
} */


btn.onclick = function nameSubmit (event) {
  event.preventDefault();
  let nameInput = yourName.value;
  let greetings=document.querySelector(".greetings");
  let hello=document.querySelector("#hello");
  hello.innerText = `Hello there, ${nameInput}!`;
 /*  let userInput=document.querySelector("#inputName");
  userInput.innerText = `${nameInput}!`; */
  yourName.classList.toggle('hide');
  greetings.classList.toggle('show');
}

