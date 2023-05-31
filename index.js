const myLibrary = [
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
    book.classList.add("book");
    book.innerHTML = `<div class="title">${item.title}</div>
    <div class="author">${item.author}</div>
    <div class="pages">PAGES: ${item.pages}</div>
    <div class="read">READ - ${item.read}</div>
    <button data-index="${index}" class="removeBook">Remove me</button>`;
    booksDisplay.appendChild(book);
    index++;
  });
  addIndexToButtons();
}

const btn = document.querySelector("#addBook");
const form = document.querySelector(".hidden");
function showHideForm() {
  form.classList.toggle("addBook-form");
  form.classList.toggle("hidden");
  bookForm.reset();
}

btn.addEventListener("click", showHideForm);
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
  showHideForm();
}

function addIndexToButtons() {
  let removeBtns = document.querySelectorAll(".removeBook");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      removeBookFromLibrary(e.target.getAttribute("data-index"));
    });
  });
}
function removeBookFromLibrary(removeIndex) {
  myLibrary.splice(removeIndex, 1);
  displayBooks();
}
//REMOVE BOOKS
// when user clicks on button
//-- Add event listeners to all buttons
// remove me books should be removed
// use data attribute on buttons to remove right element from
// array ? use splice
// from the array and display refreshed
// return new array
