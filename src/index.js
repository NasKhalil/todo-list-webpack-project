import './style.css';
import init from './init.js';
import checkBoxEvent from './checkBoxEvent.js';
import addTodo from './addTodo.js';
import clearAllCompleted from './clearAllCompleted.js';
import deleteTodo from './deleteTodo.js';
import updateTodo from './updateTodo.js';

const todos = document.getElementById('todo-container');
const inputField = document.getElementById('input-field');

class TodoList {
  constructor() {
    this.list = [];
  }

  static displayTodo = () => {
    this.list = init(this.list);
    let htmlCode = '';
    this.list.forEach((item) => {
      htmlCode += `
      <div class='todo-item'>
        <div class='left-items'>
          <input id='boxes' type="checkbox" ${item.completed ? 'checked' : ''} data-index=${item.index}>
          <p class='description' contenteditable=${!item.completed} data-index=${item.index}>${item.description}</p>
        </div>
        <button class='remove-btn'data-index=${item.index}>del</button>
      </div>
      `;
    });
    todos.innerHTML = htmlCode;

    document.querySelectorAll('#boxes').forEach((item) => {
      item.addEventListener('change', () => {
        checkBoxEvent(item);
      });
    });

    document.querySelectorAll('.remove-btn').forEach((item) => {
      item.addEventListener('click', (e) => {
        deleteTodo(e);
        this.displayTodo();
      });
    });

    document.querySelectorAll('.description').forEach((item) => {
      item.addEventListener('input', (e) => {
        updateTodo(e);
      });
    });
  };
}

inputField.addEventListener('keypress', (e) => {
  const list = init(localStorage.getItem('todoList'));
  if (e.key === 'Enter' && inputField.value) {
    addTodo(list, inputField.value);
    inputField.value = '';
    TodoList.displayTodo();
  }
});

const clearAllBtn = document.querySelector('.clear-all');

clearAllBtn.addEventListener('click', () => {
  clearAllCompleted();
  TodoList.displayTodo();
});

window.addEventListener('load', () => {
  TodoList.displayTodo();
});