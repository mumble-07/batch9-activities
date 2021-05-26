//Create a class named Player with the following:
//Add a name and country property.
//Add a function that when it runs should print into the console 
//something like: "Messi/name was born in Argentina/country"
//Make sure to adapt this function to receive dynamic //Names and Clubs.
//Create a subclass called BasketballPlayer that extends from the class Player
//Add a new property age.
//Add a function that when it runs should print into the console 
//something like: "Lebron James is 34 years old and knows how to 
//play Basketball"
//Make sure the name and age are dynamic.

class Player  {
    constructor (name,country) {
        this.name = name;
        this.country = country;
    }
    callName (){
          console.log (Player.name + "was born in" + Player.country);
      }
}

let newName = new Player ('Messi', 'Argentina');
newName.callName();

class bbPlayer extends Player {
    constructor(name,age) {
        super(name);
        this.age = age;
    }
    callName () {
        console.log (`${this.name} is ${this.age} years old and knows how to playBasketball.`)
    }
}

let newPlayer = new bbPlayer ('Lebron', 34);
newPlayer.callName();
  