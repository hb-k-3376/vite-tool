import { elements } from './main';
import { deleteMemo, insertMemo } from './service/service';
import { gsap } from 'gsap';
import type { Tables } from './supabase/database.types';

let draggingEl: HTMLElement | null = null;

export const handleDragStart = (e: DragEvent): void => {
  const target = e.target as HTMLElement;
  const memo = target.closest('.memo');

  if (memo && e.dataTransfer) {
    draggingEl = memo as HTMLElement;
    e.dataTransfer.effectAllowed = 'move';

    memo.classList.add('dragging');
  }
};

/* 드래그 중이지 ㅇ낳은 엘리먼드틑 찾아서 현재 마우스의 위치에 따라 드래그 중이지 않은 엘리먼트이 크기의 절반을 마우스가 넘었다면 그 엘리먼트를 대체하는 */
const getDragAfterElement = (container: HTMLElement, y: number) => {
  // 드래깅 클래스가 들어가지 않는 메모들만 찾겠다.  .memo:not()
  const draggableElements = [...container.querySelectorAll('.memo:not(.dragging)')] as HTMLElement[];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;

      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: -Infinity, element: null as HTMLElement | null }
  ).element;
};

export const handleDragOver = (e: DragEvent): void => {
  e.preventDefault();
  const afterEl = getDragAfterElement(elements.main, e.clientY);

  // draggingEl이 없는 경우 return
  if (!draggingEl) return;

  /** 바꿔치기 */
  if (afterEl === null) {
    elements.main.appendChild(draggingEl);
  } else {
    elements.main.insertBefore(draggingEl, afterEl);
  }
};

export const handleDragEnd = (): void => {
  if (draggingEl) {
    draggingEl.classList.remove('dragging');
    draggingEl = null;
  }
};

export const handleDelete = async (e: MouseEvent) => {
  const target = e.target as Element;
  const btn = target.closest('button');
  const memo = target.closest('article');

  if (!(btn && memo)) return;

  const id = memo.dataset.id;

  if (confirm('정말 지울거야?')) {
    deleteMemo(Number(id));
  }
};

export const handleOpenPop = () => {
  const tl = gsap.timeline().to('#dialog', { autoAlpha: 1, duration: 0.2 }).to('.pop', { y: 0, ease: 'power3.inOut' });
};
export const handleCreate = (e: MouseEvent) => {
  e.preventDefault();
  const title = document.querySelector('#title') as HTMLInputElement;
  const description = document.querySelector('#description') as HTMLInputElement;
  const priority = document.querySelector('#priority') as HTMLSelectElement;

  insertMemo({
    title: title.value,
    description: description.value,
    priority: priority.value as Tables<'memo'>['priority'],
  });

  title.value = '';
  description.value = '';
  priority.value = '';
};
export const handleClosePop = () => {
  const tl = gsap
    .timeline()
    .to('.pop', { y: '100%', ease: 'power3.inOut' })
    .to('#dialog', { autoAlpha: 0, duration: 0.2 });
};
