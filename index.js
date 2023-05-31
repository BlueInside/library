let myLibrary = [
  {
    title: "Lord of ice garden",
    author: "Jaroslaw grzedowicz",
    pages: "256",
    read: true,
  },
  {
    title: "Lord of the rings",
    author: "JRR Tolkien",
    pages: "666",
    read: false,
  },
];

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
