const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
Book.prototype.read = false;

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
    <button data-index="${index}" class="read">READ - ${item.read}</button>
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
function wireReadBtns() {
  let readBtns = document.querySelectorAll(".read");
  readBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      const bookIndex = e.target.getAttribute("data-index");
      const book = myLibrary[bookIndex];
      console.log(book.read);
    });
  });
}
wireReadBtns();
// TOGGLE BOOK READ
// when we click on button buttons with if book was read
// --add events listeners to the
// we want to change it's prototype read so it switches between true and false
// when true or false it changes color etc
