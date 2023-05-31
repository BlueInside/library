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
  booksDisplay.innerHTML = "";
  let index = 0;
  myLibrary.forEach((item) => {
    const book = document.createElement("div");
    book.dataset.index = index;
    book.classList.add("book");
    book.innerHTML = `<div class="title">${item.title}</div>
    <div class="author">${item.author}</div>
    <div class="pages">PAGES: ${item.pages}</div>
    <div class="read">READ - ${item.read}</div>`;
    booksDisplay.appendChild(book);
    index++;
  });
}

const btn = document.querySelector("#addBook");
const form = document.querySelector(".hidden");
function displayForm() {
  form.classList.toggle("addBook-form");
  form.classList.toggle("hidden");
  bookForm.reset();
}

btn.addEventListener("click", displayForm);
const bookForm = document.querySelector("#bookForm");
bookForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  const b = new Book(title, author, pages, read);
  addBookToLibrary(b);
  displayBooks();
  bookForm.reset();
}
// take data from form
//-- e.target[0-4].value and use it to create Book
//---- just query select all inputs and use them to create book?
// -- we need strings to create books ?
// object and add it to myLibrary array
