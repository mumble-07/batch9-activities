import { sayHiMixin } from "./utils.js";

class User {
  constructo(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

new User("Dude").sayHi();
