import {
  handleClosePop,
  handleCreate,
  handleDelete,
  handleDragEnd,
  handleDragOver,
  handleDragStart,
  handleOpenPop,
} from './handlers';
import { fetchMemo } from './service/service';
import '/src/style.css';

export const elements = {
  main: document.querySelector('main') as HTMLElement,
  create: document.querySelector('.create') as HTMLElement,
  done: document.querySelector('.done') as HTMLElement,
  close: document.querySelector('.close') as HTMLElement,
};

window.addEventListener('DOMContentLoaded', () => {
  fetchMemo();
});

elements.main.addEventListener('dragstart', handleDragStart);
elements.main.addEventListener('dragover', handleDragOver);
elements.main.addEventListener('dragend', handleDragEnd);
elements.main.addEventListener('click', handleDelete);

// create memo
elements.create.addEventListener('click', handleOpenPop);
elements.done.addEventListener('click', handleCreate);
elements.close.addEventListener('click', handleClosePop);
