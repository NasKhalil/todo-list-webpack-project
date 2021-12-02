export default (e) => {
  console.log('delete btn')
  let id = e.target.getAttribute('data-index');
  let data = JSON.parse(localStorage.getItem('todoList'));
  
  data = data.filter((item) => item.index !== Number(id));
  console.log('filtered data')
  console.log(data)
  
  for(let i=0; i < data.length; i++){
    data[i].index = i + 1;
  }

  localStorage.setItem('todoList', JSON.stringify(data));
}