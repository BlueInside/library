const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

title.addEventListener('input', () => {
  const span = document.querySelector('#title + span.error');
  if (title.validity.tooLong) {
    span.textContent = 'Too Long';
  }
  if (!title.validity.valid) {
    span.textContent = 'Please enter correct Title';
  } else {
    span.textContent = '';
  }
});

author.addEventListener('input', () => {
  const span = document.querySelector('#author + span.error');
  if (author.validity.valueMissing) {
    span.textContent = "This field can't be empty";
  } else if (!author.validity.valid) {
    span.textContent = 'Please enter correct Author';
  } else {
    span.textContent = '';
  }
});

pages.addEventListener('input', () => {
  const span = document.querySelector('#pages + span.error');
  if (!pages.validity.valid) {
    span.textContent = 'Please enter a number of pages';
  } else {
    span.textContent = '';
  }
});
