/* Coding challenge 1 */

/* const player = {
    name: "James Bond",
    codeName: "007",
    age: "32",
    address: {
        city: "London"
    }
};

const {name, codeName, age,
address: {city}} = player;

console.log('${name} ${codeName} is ${age}'); */

/* Coding challenge 2 */


// function addressMaker({city, street}=address) {
//     /* const {city,street} = address; */ /* Destructuring */
//     /* console.log(city,street); */
//     const newAddress = {
//         city,
//         street,
//         country: "Philippines"
//     };
//     console.log(`${newAddress.city} ${newAddress.street} ${newAddress.country}`); /* template literals yung sa backtick */
//    /*  console.log (city + " " + street); */ /* pwede rin to */
// }
// addressMaker({city: 'Quezon', street: 'Ortigas Avenue'});
/* 
const {city,street} = address;
console.log(`${city} ${street} ${country}`); */

/* Coding challenge 3 - for loops */

/* const students = [
    {name: "Manny", city: "Manila"},
    {name: "Jose", city: "Intramuros"},
    {name: "Ana", city: "Mandaluyong"}
]

for (const student of students) {
    console.log (`${student.name} lives in ${student.city}`); 
} */

/* coding challenge 4 default paraments*/

/* const storeFood = (food="something") => {
    if (food==="chicharon")
    {console.log(`I'm going to buy ${food} from the sari-sari store.`)
}
    else {
    console.log(`I'm going to buy something from the sari-sari store.`)
    }
}
storeFood("chicharon");
storeFood (); */

/* EASY WAY */
/* const storeFood = (food="something") => {
    console.log(`I'm going to buy ${food} from the sari-sari store.`)
}
storeFood("chicharon");
storeFood (); */

/* Coding challenge 4 - import export */




