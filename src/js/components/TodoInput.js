import { SELECTOR } from '../utils/constant.js';

class TodoInput {
  constructor(store) {
    this.store = store;
    this.bindEvent();
  }

  // 필요한 이벤트 바인딩
  bindEvent() {
    const container = document.getElementById(SELECTOR.TODO_INPUT);
    const form = document.getElementById(SELECTOR.TODO_FORM);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = container.value;
      container.value = '';
      const todoData = [...this.store.todoData, title];
      this.store.setTodoData(todoData);
    });
  }
}
export default TodoInput;