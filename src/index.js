import './style.css';

const tasks = [
  {
    description: 'Call the dentist at 9am',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to gym at 5pm',
    completed: false,
    index: 2,
  },
  {
    description: 'Reply to emails',
    completed: false,
    index: 3,
  },
];

const todos = document.getElementById('todo-container');

const displayTodo = () => {
  let htmlCode = '';
  tasks.forEach((item) => {
    htmlCode += `
    <div class='todo-item'>
      <div class='left-items'>
        <input type="checkbox" >
        <p>${item.description}</p>
      </div>
      <button class='remove-btn'>del</button>
    </div>
    `;
  });
  todos.innerHTML = htmlCode;
};

window.addEventListener('load', () => {
  displayTodo();
});