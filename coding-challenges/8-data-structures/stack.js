/* module.exports =  */
//same code lang to sa queue
// dito sa stack, unang pumasok, huling lalabas

class Stack {
  data = [];
  maxSize;

  constructor(initialData, maxSize = -1) {
    this.data = Array.isArray(initialData)
      ? initialData
      : typeof initialData == "undefined"
      ? []
      : [initialData];
    this.maxSize = maxSize;
  }

  isFull() {
    return this.maxSize != -1 ? this.data.length == this.maxSize : false;
  }

  isEmpty() {
    return this.data.length == 0;
  }

  add(item) {
    if (this.isFull()) {
      return false;
    }
    this.data.push(item);
  }

  *generator() {
    while (!this.isEmpty()) {
      yield this.data.pop();
    }
  }

  pop() {
    const { value, done } = this.generator().next();
    if (done) return false;
    return value;
  }
}

//OPERATIONS
/* 
const Stack = require("./stack.js"); */

class Operation {
  constructor(val) {
    this.value = val;
  }
}

class Add extends Operation {
  apply(value) {
    return value + this.value;
  }

  undo(value) {
    return value - this.value;
  }
}

class Times extends Operation {
  apply(value) {
    return value * this.value;
  }
  undo(value) {
    return value / this.value;
  }
}

// /** Operations Stack **/
// class OpsStack {
//   constructor() {
//     this.value = 0;
//     this.operations = new Stack();
//   }

//   add(op) {
//     this.value = op.apply(this.value);
//     this.operations.add(op);
//   }

//   undo() {
//     if (this.operations.isEmpty()) {
//       return false;
//     }
//     this.value = this.operations.pop().undo(this.value);
//   }
// }

// let s = new OpsStack();

// s.add(new Add(1));
// s.add(new Add(1));
// s.add(new Times(2));
// console.log("Current value: ", s.value);
// s.undo();
// s.undo();
// console.log("Final value: ", s.value);

// //Current value:  4
// //Final value:  1
