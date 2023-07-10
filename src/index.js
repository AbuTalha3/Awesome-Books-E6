import {BookList} from '../modules/bookList';
import { DateTime } from 'luxon';

const bookList = new BookList();
bookList.init();

document.addEventListener('DOMContentLoaded', () => {
  const timer = document.getElementById('datetime')
  const clock = DateTime.now().toLocaleString()
  timer.textContent = clock;
})