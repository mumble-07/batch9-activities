const clockJs = document.querySelector (".clock")
const clockText = clockJs.querySelector ("h1")
const appDate=clockJs.querySelector("h3")
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes =date.getMinutes();
    const seconds = date.getSeconds();
    clockText.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }


    function showTime() {
        getTime();
        setInterval (getTime, 1000);
    }
    
    showTime();


function showDate() {
    let monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
     let date = new Date();
    let month = monthsArray[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    appDate.textContent = month + " " + day + ", " + year;
}

showDate ();