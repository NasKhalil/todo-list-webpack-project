export default (e) => {
  const id = Number(e.target.getAttribute('data-index'));
  const data = JSON.parse(localStorage.getItem('todoList'));
  const todoObj = data.find((x) => x.index === id);

  todoObj.description = e.target.textContent;
  localStorage.setItem('todoList', JSON.stringify(data));
};