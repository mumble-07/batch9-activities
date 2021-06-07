//Object-oriented Program

/* var edwin = {
  name: "Edwin",
  birthYear: 1990,
};

var dom = {
  name: "Dom",
  birthYear: 2000,
};

var ian = {
  name: "Ian",
  birthYear: 1995,
}; */

//this keyword

/* function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var greeting = "Hello, I'm " + identify.call(this);
  console.log(greeting);
}

var me = {
  name: "Kyle",
};

var you = {
  name: "Reader",
};

identify.call(me); // KYLE
identify.call(you); // READER

speak.call(me); // Hello, I'm KYLE
speak.call(you); // Hello, I'm READER */

///

/* function identify(context) {
  return context.name.toUpperCase();
}

function speak(context) {
  var greeting = "Hello, I'm " + identify(context);
  console.log(greeting);
}

identify(you); // READER
speak(me); // Hello, I'm KYLE */

//

/* function foo(num) {
  console.log("foo: " + num);

  // keep track of how many times `foo` is called
  this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo: 6
// foo: 7
// foo: 8
// foo: 9

// how many times was `foo` called?
console.log(foo.count); // 0 -- WTF? */

//

/* var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  this.calculateAge = function () {
    console.log(2021 - this.yearOfBirth);
  };
};

//

var francis = new Person("francis", 2000, "teacher");
var victor = new Person("victor", 1969, "designer");
var john = new Person("john", 1984, "retired");
 */

//CODING CHALLENGE

/* Create an object store that will contain the name of the store, inventory list, and the earnings
Create an object book that will contain the title, the quantity, and the value of the book
Create a function addBook() that creates a book object (with title, quantity and value) and add it 
to an array of book objects in the store inventory
Create a function restockBook() that takes the parameters title and quantity and adds the corresponding book to the inventory. 
The book should already exist in the inventory, if not, restock should not push thru.
Create a function sellBook() that takes the parameter title and quantity. When called, it searches for the book with the corresponding title, 
deducts the quantity, and adds the earnings accordingly
If the book does not exist, transaction will fail then print a message ${book-title} out of stock.
If quantity is less than what is in the inventory, transaction will fail then print message only ${number} stocks left
If sell was successful, print message "Successful transaction"
Create a function totalEarnings() that will display the total earnings of the store, print store name and earnings;
Create a function listInventory() that will display all of books in the inventory, print title quantity and value; */

// let bookCount = 0;
// let storeEarnings = {};

// var books = [
//   {
//     bookTtitle: "Noli me Tangere",
//     bookQuantity: 3,
//     bookCost: 400,
//   },
// ];

// var store = {
//   storeName: "Books R us",
//   inventoryList: [],
//   earnings: 0,
//   quantityBooks: [],
// };

// //FUNCTIONS

// /* function increment(add) {
//   bookCount += 1;
//   store.quantityBooks.push(bookCount);
// } */

// let addBook = function (bookTitle, bookQuantity, bookCost) {
//   var bookItems = {};
//   bookItems.bookTitle = bookTitle;
//   bookItems.bookQuantity = bookQuantity;
//   bookItems.bookCost = bookCost;
//   /*   books.push(bookItems); */
//   store.inventoryList.push(bookItems);
// };

// this.restockBook = function () {
//   if (bookItems.bookQuantity > 0) {
//     console.log(
//       `You still have ${bookItems.bookQuantity} pieces of ${bookItems.bookTitle} in your inventory`
//     );
//   } else {
//     console.log(`Please restock ${bookItems.title}.`);
//   }
// };

// this.sellBook = function () {
//   let element = store.inventoryList.find(
//     (element) => element.bookTitle === bookTitle
//   );
//   if (element.bookQuantity > 0) {
//     console.log(`You only have ${element.bookQuantity} stocks left.`);
//   }
//   element.bookQuantity -= bookQuantity;
//   store.earnings += bookQuantity * element.bookCost;
//   console.log(
//     `Successful Transaction! You still have ${element.bookQuantity} stocks of ${bookItems.bookTitle} left.`
//   );
// };

// this.inventoryList = function () {
//   console.log(`${store.inventoryList}`);
// };

// function totalEarnings() {
//   console.log(`${store.storeName}'s Total Earnings: P${store.earnings}`);
// }

// //ADDING:
// let lotr = new addBook("Lord of the Rings", 1, 500);
// let tlp = new addBook("The Little Prince", 1, 300);
// let tkamb = new addBook("To Kill a Mocking Bird", 2, 500);
// let lotf = new addBook("Lord of the Flies", 3, 500);

// // console.log(book);
// addBook();
// lotr.restockBook();
// totalEarnings();
// console.log(store.listInventory());

// /* sellBook("The Little Prince", 3, 300); */
// /* console.log(books); */

// totalEarnings("Books R Us", 1500);
// console.log(storeEarnings);

//USING CLASS

class Store {
  constructor(storeName, inventoryList, earnings) {
    this.storeName = storeName;
    this.inventoryList = inventoryList;
    this.earnings = earnings;
  }

  addBook(bookTitle, bookQuantity, bookCost) {
    var addingbooks = new Books(bookTitle, bookQuantity, bookCost);
    this.inventoryList.push(addingbooks);
  }

  restockBook(bookTitle, bookQuantity) {
    this.inventoryList.some((books) => {
      if (books.bookTitle === bookTitle) {
        books.bookQuantity += bookQuantity;
      }
    });
  }

  sellBook(bookTitle, bookQuantity) {
    console.log(`SOLD`);
    this.inventoryList.forEach((books) => {
      if (books.bookTitle === bookTitle) {
        if (books.bookQuantity === 0) {
          return console.log(`OUT OF STOCK!: ${books.bookTitle}`);
        } else if (books.bookQuantity < bookQuantity) {
          return console.log(`STOCKS LEFT: ${books.bookQuantity}`);
        } else {
          books.bookQuantity -= bookQuantity;
          this.earnings += books.bookCost * bookQuantity;
          console.log(`TRANSACTION SUCCESSFUL!`);
        }
      }
    });
  }
  totalEarnings() {
    console.log(`STORE NAME: ${this.storeName}`);
    console.log(`EARNINGS: P${this.earnings}`);
  }

  inventoryList() {
    console.log("INVENTORY");
    this.inventoryList.forEach((books) => {
      console.log(
        `Book Title: ${books.bookTitle} Quantity: ${books.bookQuantity} pcs Cost: ${books.bookCost}`
      );
    });
  }
}

class Books {
  constructor(bookTitle, bookQuantity, bookCost) {
    this.bookTitle = bookTitle;
    this.bookQuantity = bookQuantity;
    this.bookCost = bookCost;
  }
}

//ADDING BOOKS
let bookStore = new Store("Books R Us!", [], 0);

bookStore.addBook("Lord of the Rings", 1, 500);
bookStore.addBook("The Little Prince", 1, 300);
bookStore.addBook("To Kill a Mocking Bird", 2, 500);
bookStore.addBook("Lord of the Flies", 3, 500);

//SELLING BOOKS
console.log(bookStore);
bookStore.sellBook("Lord of the Flies", 3);

//TOTAL EARNINGS
bookStore.totalEarnings();
bookStore.inventoryList();
