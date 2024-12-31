class Todo {
  constructor() {
    this.todos = [];
  }

  // Adds a todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Removes a todo by index
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    } else {
      throw new Error("Invalid index");
    }
  }

  // Updates a todo at a given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      throw new Error("Invalid index");
    }
  }

  // Returns all todos
  getAll() {
    return this.todos;
  }

  // Returns a todo by index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      throw new Error("Invalid index");
    }
  }

  // Clears all todos
  clear() {
    this.todos = [];
  }
}

// Testing the implementation
const myTodos = new Todo();

myTodos.add("Learn JavaScript");
myTodos.add("Build a project");
myTodos.add("Practice coding");

console.log("All Todos:", myTodos.getAll());

myTodos.update(1, "Build a to-do app");
console.log("After update:", myTodos.getAll());

myTodos.remove(0);
console.log("After removal:", myTodos.getAll());
console.log("Get Todo at index 1:", myTodos.get(1));

myTodos.clear();
console.log("After clearing:", myTodos.getAll());
