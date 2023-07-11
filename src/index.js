import { DateTime } from 'luxon';
import { BookList } from '../modules/bookList';

const bookList = new BookList();
bookList.init();

document.addEventListener('DOMContentLoaded', () => {
  const timer = document.getElementById('datetime');
  const clock = DateTime.now().toLocaleString();
  timer.textContent = clock;
});