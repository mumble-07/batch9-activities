/* FETCH */
// 1. install node-fetch npm install
// 2. add package.json

/* fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(data)); */

/* const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/comments/1")
  .then((response) => response.json())
  .then((data) => console.log(result)); */

/*   ASYNC & AWAIT */

import fetch from "node-fetch";
const photos = [];

async function photoUpload() {
  let uploadStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      photos.push("picture");
      resolve("Photo uploaded");
    }, 3000);
  });

  let result = await uploadStatus;
  console.log(result);
  console.log(photos.length);
}

photoUpload();

/* challenge 2 */

/* async function randomJoke() {
  let response = await fetch("https://api.chucknorris.io/jokes/random");
  let data = await response.json();
  console.log(data.value);
}
randomJoke(); */
