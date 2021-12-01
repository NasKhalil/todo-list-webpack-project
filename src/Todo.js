export default class Todo {
  constructor(description, completed = false) {
    this.index = Math.random();
    this.description = description;
    this.completed = completed;
}
}