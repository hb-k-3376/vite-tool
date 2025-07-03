import { handleDragEnd, handleDragOver, handleDragStart } from './handlers';
import { fetchMemo } from './service/service';
import '/src/style.css';

export const elements = {
  main: document.querySelector('main')!,
};

window.addEventListener('DOMContentLoaded', () => {
  fetchMemo();
});

elements.main.addEventListener('dragstart', handleDragStart);
elements.main.addEventListener('dragover', handleDragOver);
elements.main.addEventListener('dragend', handleDragEnd);
