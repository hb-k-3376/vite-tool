import { loadStorage, saveStorage } from './storage';
import { addTodo, deleteTodo, toggleTodo, updateTodo } from './todo';
import type { ITodo, TodoList } from './type';
import S from '/src/todo.module.css';
/**
  1. todoList 구조를 가진 태그를 만들어 화면에 렌더링 해주세요.
  2. css module을 사용해서 스타일링을 해주세요.
  3. 생성된 dom 요소를 잡아서 form 이벤트를 바인딩 해주세요.
  4. input의 value 값을 가져와 주세요.
  5. render 함수를 만들어 아이템을 appendChild를 사용해 렌더링 해주세여.
 */

const tag = `
      <div class="${S.container}">
        <form>
          <label type="text" for="todo">할일 :</label>
          <input type="text" id="todo" />
          <button type="submit">추가</button>
        </form>
        <hr />
        <ul class="renderPlace">

        </ul>
      </div> 
`;

document.querySelector<HTMLDivElement>('#app')!.insertAdjacentHTML('beforeend', tag);
const input = document.querySelector('#todo') as HTMLInputElement;
const ul = document.querySelector('.renderPlace') as HTMLUListElement;

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const value = input.value.trim();
  if (!value) return;

  addTodo(value);
  input.value = '';
  render();
};

// todos 데이터를 두개 이상 추가해서 리스트 렌더링으로 변경해주세요.
const render = () => {
  ul.innerHTML = '';

  const todos: TodoList = loadStorage();

  todos.forEach(({ id, completed, content }: ITodo) => {
    const li = document.createElement('li');
    li.dataset.id = String(id);
    li.innerHTML = `
      <input type="checkbox" name="checkbox" ${completed ? 'checked' : ''}/>
      <span contenteditable="true" >${content}</span>
      <button class="delete" type="button">삭제</button>
  `;
    ul.appendChild(li);

    const btn = li.querySelector('button') as HTMLButtonElement;
    const checkbox = li.querySelector('input[type="checkbox"]') as HTMLInputElement;
    const span = li.querySelector('span') as HTMLSpanElement;

    // span 태그가 마치 input 처럼 사용 가능하네
    // blur 이벤트란? focus out이 될때 동작 한다.
    span.addEventListener('blur', () => {
      const value = span.textContent?.trim() || '';
      value && updateTodo({ id, content: value });
    });

    checkbox.addEventListener('change', () => {
      toggleTodo(id);
    });

    btn.addEventListener('click', () => {
      deleteTodo(id);
      render();
    });
  });
};

render();
document.querySelector<HTMLFormElement>('form')!.addEventListener('submit', handleSubmit);
