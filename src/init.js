export default (data) => {
  data = localStorage.getItem('todoList');
  let getData = data;
  if (getData === null) {
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
localStorage.setItem('todoList', JSON.stringify(tasks));
  } else {
    getData = JSON.parse(getData);
  }
  return getData;
};