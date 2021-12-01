import './style.css';
import init from './init.js';
import checkBoxEvent from './checkBoxEvent.js';

const todos = document.getElementById('todo-container');
const inputField = document.getElementById('input-field');

class TodoList {
  constructor() {
    this.list = [];
  }

  static displayTodo = () => {
    init(this.list);
    this.list = [...init(this.list)]
    let htmlCode = '';
    this.list.forEach((item) => {
      htmlCode += `
      <div class='todo-item'>
        <div class='left-items'>
          <input id='boxes' type="checkbox" ${item.completed ? 'checked' : ''} data-index=${item.index}>
          <p>${item.description}</p>
        </div>
        <button class='remove-btn'>del</button>
      </div>
      `;
    });
    todos.insertAdjacentHTML('beforeend', htmlCode);

    document.querySelectorAll('#boxes').forEach((item) => {
      item.addEventListener('change', ()=> {
        checkBoxEvent(item)
      })
    })
  };
}

window.addEventListener('load', () => {
  TodoList.displayTodo();
});