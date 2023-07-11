import { DateTime } from '../modules/luxon.js';
import BookList from '../modules/bookList.js';

const bookList = new BookList();
bookList.init();

document.addEventListener('DOMContentLoaded', () => {
  const timer = document.getElementById('datetime');
  const clock = DateTime.now().toLocaleString();
  timer.textContent = clock;
});