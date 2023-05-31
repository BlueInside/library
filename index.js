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
const booksDisplay = document.querySelector(".book-display");
function displayBooks() {
  myLibrary.forEach((item) => {
    const book = document.createElement("div");
    book.classList.add("book");
    book.innerHTML = `<div class="title">${item.title}</div>
    <div class="author">${item.author}</div>
    <div class="pages">PAGES: ${item.pages}</div>
    <div class="read">READ - ${item.read}</div>`;
    booksDisplay.appendChild(book);
  });
}
