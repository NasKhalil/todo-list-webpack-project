export default (t) => {
  const { index } = t.dataset;
  const data = JSON.parse(localStorage.getItem('todoList'));
  const item = data.find((it) => it.index === +index);

  if (t.checked) {
    item.completed = true;
  } else {
    item.completed = false;
  }

  localStorage.setItem('todoList', JSON.stringify(data));
};