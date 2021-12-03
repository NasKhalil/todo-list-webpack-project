export default () => {
  let data = JSON.parse(localStorage.getItem('todoList'));
  data = data.filter((elem) => elem.completed !== true);
  for (let i = 0; i < data.length; i += 1) {
    data[i].index = i + 1;
  }
  localStorage.setItem('todoList', JSON.stringify(data));
};