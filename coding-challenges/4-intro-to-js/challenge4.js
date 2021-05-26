//Coding Challenge: Complex Data Types - Objects
//Create an object that describes something of your choosing, like a car or animal.
//Give that object 5 key/value pairs that include all primitive and complex data types
//Give the object 1 method that uses the 'this' keyword to console log something from the object when called
//console.log 2 properties from the object, once with 'dot' notation and once with 'bracket' notation.

const fellowship = {
    name: "Frodo Baggins",
    age: 51,
    race: "Hobbit",
    affiliation: "Company of the Ring",
    companions: ["Merry", "Sam", "Pippin", "Aragorn", "Boromir", "Legolas", "Gimli", "Gandalf"],
    myPrecious: function (){
        return console.log("You shall not pass " + this.name)
    }
}

console.log(fellowship.name +", " + fellowship.age)
console.log(fellowship.race)
console.log(fellowship["companions"])
console.log(fellowship["affiliation"])
fellowship.myPrecious()
