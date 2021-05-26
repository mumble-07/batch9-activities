/* const buyFlightTicket = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Sorry your payment was not succesful");
      } else {
        resolve("Thank you, your payment was succesful");
      }
    }, 3000);
  });
};

buyFlightTicket()
  .then((success) => console.log(success))
  .catch((error) => console.log(error)); */

/*   coding challenge 1 */

/* 1. Create a function named findUserData().
2 Create a promise that returns some user data and throws an error when not found.
3 The user data should return an object that has the properties firstName, age, email.
4 The error log can be any string message.
5 Log the user data when listening to the promise as well as log the error. */

var data = {
  firstName: "Luke",
  lastname: "Skywalker",
  age: 50,
  email: "luke.skywalker@tatooine.com",
};

const findUserData = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* const data = false; */
      if (!data) {
        reject("Error: Data not found!");
      } else {
        resolve(`${data.firstName} ${data.lastname} ${data.age} ${data.email}`);
      }
    }, 2000);
  });
};

findUserData(data)
  .then((success) => console.log(success))
  .catch((error) => console.log(error));

findUserData(null)
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
