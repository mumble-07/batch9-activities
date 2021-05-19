let mainFocus = document.getElementById("focus");
let fbtn = document.getElementById("submitF");

fbtn.onclick = function mFocus (event) {
    event.preventDefault();
    let inputFocus = mainFocus.value;
    let showFocus = document.querySelector(".show-mfocus");
    showFocus.innerText = `${inputFocus}`;
    mainFocus.classList.toggle('hide');
    mainFocus.classList.toggle('show');
}