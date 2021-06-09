function store(name, list, earnings) {
  (this.name = name), (this.list = list), (this.earnings = earnings);
}

//create instance of store
let sampleStore = new store("Avion Store", [], 0);

function book(title, quantity, value) {
  (this.title = title), (this.quantity = quantity), (this.value = value);
}

let mybook = new book("Harry Potter", 5, 500);

store.prototype.addBook = function (title, quantity, value) {
  let newBook = new book(title, quantity, value);
  this.list.push(newBook);
};

sampleStore.addBook("Cinder", 10, 300);
sampleStore.addBook("The Little Prince", 10, 300);
sampleStore.addBook("Lord of the Rings", 2, 500);

store.prototype.restockBook = function (title, quantity) {
  this.list.some((book) => {
    if (book.title === title) {
      book.quantity += quantity;
    }
  });
  console.log(this.list);
};

sampleStore.restockBook("Cinder", 5);
sampleStore.restockBook("Harry Potter", 4);

// TODO
//sell book
/* store.prototype.sellBook = function (title, quantity) {
    const bookIndex = this.list.findIndex((book) => book.title === title);
  
    if (bookIndex !== -1) {
      const {
        title: StoreTitle,
        quantity: Stock,
        value: Price,
      } = this.list[bookIndex];
  
      if (Stock < quantity) {
        console.log(`${StoreTitle} has only ${Stock} left`);
      } else {
        this.list[bookIndex].quantity -= quantity;
        this.earnings += quantity * Price;
      }
    } else {
      console.log(`We don't sell that book here`);
    }
  }; */

//Refactor
store.prototype.sellBook = function (title, quantity) {
  this.list.some((book) => {
    if (book.title === title) {
      if (book.quantity < quantity) {
        console.log(`STOCKS LEFT: ${book.quantity} for ${book.title}`);
      } else {
        book.quantity -= quantity;
        this.earnings += book.value * quantity;
        console.log(`SUCCESFUL TRANSACTION!`);
      }
    }
  });
  let bookTitle = this.list.some((book) => book.title === title);
  if (!bookTitle) {
    console.log(`OUT OF STOCK: ${book.title}`);
  }
};

store.prototype.totalEarnings = function () {
  console.log(`Store name is ${this.name} with earnings of ${this.earnings}`);
};

sampleStore.totalEarnings();

store.prototype.listInventory = function () {
  this.list.map((book) => {
    console.log(`${book.title}, ${book.quantity}, ${book.value}`);
  });
};

sampleStore.listInventory();
sampleStore.earnings();
sampleStore.sellBook("Cinder", 5);
sampleStore.sellBook("The Little Prince", 5);
