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

let bookCount = 0;
var books = [];
let storeEarnings = {};

var store = {
  storeName: "Books R us",
  inventoryList: [],
  quantityBooks: [],
  /*   earnings: ` P ${}`, */
};

//FUNCTIONS

function increment(add) {
  bookCount += 1;
  store.quantityBooks.push(bookCount);
}

function addBook(bookTitle, bookQuantity, bookCost) {
  var bookItems = [];
  bookItems.bookTitle = bookTitle;
  bookItems.bookQuantity = bookQuantity;
  bookItems.bookCost = bookCost;
  books.push(bookItems);
  store.inventoryList.push(bookItems);
  increment();
}

function restockBook(bookTitle, bookQuantity, bookCost) {
  if (bookTitle === store.inventoryList[0]) {
    books[0].bookQuantity += bookQuantity;
    books[0].bookCost += bookQuantity * bookCost;
    console.log(`${bookTitle} restocked.`);
  }
  if (bookTitle === store.inventoryList[1]) {
    books[1].bookQuantity += bookQuantity;
    books[1].bookCost += bookQuantity * bookCost;
    console.log(`${bookTitle} restocked.`);
  }
}

/* let restockBooks = [];
  restockBooks.bookTitle = bookTitle;
  restockBooks.bookQuantity = bookQuantity;
  restockBooks.bookCost = bookCost;
  store.inventoryList.push(restockBooks);
  increment(); */

function sellBook(bookTitle, bookQuantity, bookCost) {
  if (bookTitle === store.inventoryList[0]) {
    if (books[0].bookQuantity < quantityBooks) {
      console.log("Only" + books[0].bookQuantity + " stock/s left.");
    } else {
      books[0].quantityBooks -= bookQuantity;
      books[0].bookCost -= bookQuantity * bookCost;
      store.storeEarnings += bookQuantity * bookCost;
    }
  } else {
    console.log(`${bookTitle} out of stock.`);
  }

  /* let soldBooks = [];
  soldBooks.bookTitle = bookTitle;
  soldBooks.bookQuantity = bookQuantity;
  soldBooks.bookCost = bookCost;
  store.inventoryList.pop(soldBooks); */
}
function totalEarnings(storeName, totalEarnings) {
  console.log(`${store.storeName}'s Total Earnings: ${storeEarnings}`);
  /*   storeEarnings.storeName = storeName;
  storeEarnings.totalEarnings = totalEarnings; */
}

//ADDING:
addBook("Lord of the Rings", 1, 500);
addBook("The Little Prince", 1, 300);
/* sellBook("The Little Prince", 3, 300); */
/* console.log(books); */

restockBook("Harry Potter", 1, 700);
console.log(store);
console.log("Book count =", bookCount);

totalEarnings("Books R Us", 1500);
console.log(storeEarnings);
///
/* function addBook (bookTitle, bookQuantity, bookCost) {
  this.bookTitle = bookTitle;
  this.bookQuantity = bookQuantity;
  this.bookCost = bookCost;
}
 */

/*  let counter = bookQuantity.length;
  for (var i = 0; i < counter; i++) {
    console.log("restock");
  } */
