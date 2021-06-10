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
}

class BookStore extends MainStore {
  constructor(bookTitle, bookQuantity, bookCost) {
    super();
    this.bookTitle = bookTitle;
    this.bookQuantity = bookQuantity;
    this.bookCost = bookCost;
  }

  addBook(bookTitle, bookQuantity, bookCost) {
    let addingBooks = new BookStore(bookTitle, bookQuantity, bookCost);
    this.inventoryList.push(addingBooks);
  }
}

class Laptop extends MainStore {
  constructor(laptopBrand, laptopQuantity, laptopCost) {
    super();
    this.laptopBrand = laptopBrand;
    this.laptopQuantity = laptopQuantity;
    this.laptopCost = laptopCost;
  }
}

let newBookStore = new MainStore("Books R Us", [], 0);
/* newBookStore.addBook("Lord of the Rings", 1, 500); */
