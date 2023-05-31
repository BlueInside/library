let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  if (book instanceof Book) {
    myLibrary.push(book);
  }
}

function displayBooks() {
  myLibrary.forEach((element) => {});
}
