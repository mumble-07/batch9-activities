/*refactor Store js code into  Class approach -> class MainStore
extends MainStore Class capability to BookStore -> imagine  BookStore is intended only for books
overall items should reflect in MainStore
total earnings should reflect to MainStore class and also BookStore*/

class MainStore {
  constructor(storeName, inventoryList, earnings) {
    this.storeName = storeName;
    this.inventoryList = inventoryList;
    this.earnings = earnings;
  }

  MaininventoryList() {
    this.inventoryList.map((element) => {
      console.log(
        `${element.bookTitle}, ${element.bookQuantity}, ${element.bookCost}`
      );
    });
  }
  overallEarnings() {
    console.log(`${this.storeName} total earnings: ${this.earnings}`);
  }
}

class bookList {
  constructor(bookTitle, bookQuantity, bookCost) {
    this.bookTitle = bookTitle;
    this.bookQuantity = bookQuantity;
    this.bookCost = bookCost;
  }
}

/* class Laptop {
  constructor(laptopBrand, laptopQuantity, laptopCost) {
    this.laptopBrand = laptopBrand;
    this.laptopQuantity = laptopQuantity;
    this.laptopCost = laptopCost;
  }
} */

class BookStore extends MainStore {
  constructor(storeName, inventoryList, earnings, MainStore) {
    super(storeName, inventoryList, earnings);
    this.MainStore = MainStore;
  }
  addBook(bookTitle, bookQuantity, bookCost) {
    let newBookList = new bookList(bookTitle, bookQuantity, bookCost);
    this.MainStore.inventoryList.push(newBookList);
    this.inventoryList.push(newBookList);
  }

  sellBook(bookTitle, bookQuantity) {
    this.inventoryList.find((element) => {
      if (element.bookTitle === bookTitle) {
        if (element.bookQuantity < bookQuantity) {
          console.log(
            `TRANSACTION FAILED! Book stocks left: ${element.bookQuantity} of ${bookTitle}`
          );
        } else {
          element.bookQuantity -= bookQuantity;
          this.earnings += element.bookCost * bookQuantity;
          this.MainStore.earnings += element.bookCost * bookQuantity;
          console.log(`SUCCESSFUL TRANSACTION: ${bookTitle}`);
        }
      }
    });
  }

  restockBook(bookTitle, bookQuantity) {
    this.inventoryList.some((element) => {
      if (element.bookTitle === bookTitle) {
        element.bookQuantity += bookQuantity;
      }
    });
    console.log(this.inventoryList);
  }
}

let realMainStore = new MainStore("Andy's shop", [], 0);
let realBookStore = new BookStore("Books R Us", [], realMainStore);

//ADD BOOKS
realBookStore.addBook("Lord of the Rings", 5, 400);
realBookStore.addBook("The Little Prince", 10, 300);
//SELL BOOKS
realBookStore.sellBook("The Little Prince", 2);
realBookStore.sellBook("Lord of the Rings", 3);
//RESTOCK BOOKS
realBookStore.restockBook("Lord of the Rings", 3);
realBookStore.restockBook("The Litte Prince", 4);

realMainStore.MaininventoryList();
realBookStore.MaininventoryList();
realMainStore.overallEarnings();
realMainStore.overallEarnings();
