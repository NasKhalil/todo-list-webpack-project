export default (tasks, todo) => {
  tasks.push({
    index: tasks.length + 1,
    description: todo,
    completed: false,
  });
  localStorage.setItem('todoList', JSON.stringify(tasks));
};