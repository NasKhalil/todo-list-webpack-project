export default (data) => {
  data = localStorage.getItem('todoList');
  let getData = data;
  if (getData === null) {
    getData = [];
  } else {
    getData = JSON.parse(getData);
  }
  return getData;
};