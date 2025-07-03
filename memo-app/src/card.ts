import type { Tables } from './supabase/database.types';

export type MemoData = {
  id: number;
  priority: 'high' | 'medium' | 'easy';
  title: string;
  description: string;
  hits: number;
};

export const createMemo = (memo: Omit<Tables<'memo'>, 'created_at'>): string => {
  return `        
        <article class="memo ${memo.priority}" draggable='true'>
          <header class="memo-header">
            <span class="badge">${memo.priority}</span>
            <button type="button" class='delete'>
              <img src="/trash.svg" alt="삭제 아이콘" />
            </button>
          </header>
          <div class="contents">
            <h2>${memo.title}</h2>
            <p>${memo.description}</p>
          </div>
          <footer class="memo-footer">
            <img src="user.svg" alt="유저 아이콘" /><span class="hit">${memo.hits}</span> watch
            <img src="drag.svg" alt="드래그 아이콘" class="drag" />
          </footer>
        </article>
  `;
};

// renderMemo
export const renderMemo = (target: HTMLElement | null, memo: Omit<Tables<'memo'>, 'created_at'>): void => {
  // insertAdjacentHTML <- string을 렌더링 해준다.
  target?.insertAdjacentHTML('beforeend', createMemo(memo));
};
