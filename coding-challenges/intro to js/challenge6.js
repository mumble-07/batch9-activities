/* Declare a variable username - stored as a string.
Declare a variable password - stored as a string.
Write an if-else statement,
if the username is incorrect, log incorrect
if the password is incorrect, log incorrect
else - both were correct and the user was able to log in */


const username = 'mumble-07'
const password = '12345'

/* TESTING --> Incorrect */
/* inputUN = 'mumbleee'
inputPW = '54321' */
/* TESTING --> Correct */
inputUN = 'mumble-07'
inputPW = '12345'

if (inputUN !== username) {
    console.log ('log incorrect')
} else if (inputPW !== password) {
    console.log ('log incorrect')
} else {
console.log ('log correct!')
}