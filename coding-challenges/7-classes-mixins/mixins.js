import { sayHiMixin } from "utils.mjs";

class User {
  constructo(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

new User("Dude").sayHi();
