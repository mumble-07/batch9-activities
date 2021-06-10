// /* class CoolGuy {
//   specialTrick = nothing;

//   CoolGuy(trick) {
//     specialTrick = trick;
//   }

//   showOff() {
//     output("Here's my trick: ", specialTrick);
//   }
// }
// Joe = new CoolGuy("jumping rope");

// Joe.showOff(); // Here's my trick: jumping rope */

// //foo
// class Vehicle {
//   constructor() {
//     this.engines = 1;
//   }

//   ignition() {
//     console.log("Turning on my engine.", this.engines);
//   }
//   drive() {
//     this.ignition();
//     console.log("Steering and moving forward!");
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super();
//     this.wheels = 4;
//   }

//   drive() {
//     super.drive();
//     console.log("Rolling on all", this.wheels, " wheels!");
//   }
// }

// class SpeedBoat extends Vehicle {
//   engines = 2;

//   ignition() {
//     output("Turning on my ", engines, " engines.");
//   }

//   pilot() {
//     inherited: drive();
//     output("Speeding through the water with ease!");
//   }
// }

// //Poly

// /* class Vehicle {
// 	engines = 1

// 	ignition() {
// 		output("Turning on my engine.")
// 	}
// 	drive() {
// 		ignition()
// 		output("Steering and moving forward!")
// 	}
// }

// class Car inherits Vehicle {
// 	wheels = 4
	
// 	drive() {
// 		inherited:drive()
// 		output("Rolling on all", wheels, " wheels!")
// 	}
// }

// class SpeedBoat inherits Vehicle {
// 	engines = 2

// 	ignition() {
// 		output("Turning on my ", engines, " engines.")
// 	}

// 	pilot() {
// 		inherited:drive()
// 		output("Speeding through the water with ease!")
// 	}
// } */


//from sir Pau 


​
class Vehicle {
    constructor() {
        this.engines = 1
        this.gas = "diesel" 
    } 
​
    ignition() {
        console.log("Turning on my engine", this.engines)
    }
    
    drive() {
        this.ignition()  
        console.log("Steering and moving forward!")
    }
}
​
class Car extends Vehicle {
    constructor() {
        super()
        this.wheels = 4
    }
​
    drive() {
        super.drive()
        console.log("Rolling on all", this.wheels, "wheels!")
    }
}
​
let car = new Car()
car.drive()
​
class SpeedBoat extends Vehicle { 
    constructor() {
        super()
        this.engines = 2
    }
​
    ignition() {
        console.log("Turning on my", this.engines, "engines")
    }
​
    pilot() {
        super.drive()
        console.log("Speeding through the water with ease")
    }
}
​
​
// let boat = new SpeedBoat() 
// boat.pilot()
​
​
​
// class CoolGuy {
//     constructor(trick) { // jumping rode
//         this.specialTrick = trick
//     }
//     showOff() {
//         console.log(this.specialTrick)
//     }
// }
​
// let Joe = new CoolGuy("rope jumping")
// Joe.showOff()