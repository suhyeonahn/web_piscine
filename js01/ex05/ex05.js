const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const ul = document.getElementById("todoList");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id != parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const button = document.createElement("button");
    button.innerHTML = "❌";
    button.addEventListener("click", deleteTodo);
    li.innerHTML = newTodo.text;

    li.appendChild(button);
    ul.appendChild(li);

}

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
})

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
    const parseTodos = JSON.parse(savedTodos);
    todos = parseTodos;
    parseTodos.forEach(paintTodo);
}