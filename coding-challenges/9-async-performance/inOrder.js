// Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.
// var logOne = setTimeout(function() {
//   console.log("one!");
// }, Math.random() * 1000);
// var logTwo = setTimeout(function() {
//   console.log("two!");
// }, Math.random() * 1000);
// inOrder(logOne, logTwo);
// // one
// // two
// // it should always log those two in order regardless of their timing
// * Refactor inOrder to use promises.
//-------------------------------------------//
//STARTER CODE:
/* 
var logOne = setTimeout(function () {
  console.log("one!");
}, Math.random() * 1000);

var logTwo = setTimeout(function () {
  console.log("two!");
}, Math.random() * 1000);

inOrder(logOne, logTwo); */

//-------------------------------------------//

async function inOrder(One, Two) {
  const oneOne = await One();
  console.log(oneOne);
  const twoTwo = await Two();
  console.log(twoTwo);
}

function One() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const logOne = "one!";
      resolve(logOne);
    }, Math.random() * 5000);
    console.log(Math.random());
  });
}

function Two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const logTwo = "two!";
      resolve(logTwo);
    }, Math.random() * 1000);
    console.log(Math.random());
  });
}

inOrder(One, Two);
