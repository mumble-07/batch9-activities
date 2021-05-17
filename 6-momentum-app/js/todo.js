/* 
const listTodo = document.querySelector(".js-listTodo"); */

let todoItem = [];

function renderTodo (todo) {
  const list = document.querySelector('js-toDoList');
  
  const isChecked = todo.checked ? 'done': '';
  const node = document.createElement("li");
  node.setAttribute('class', `todo-item ${isChecked}`);
  node.setAttribute('data-key', todo.id);
  node.innerHTML = `
    <input id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button class="delete-todo js-delete-todo">
    <svg><use href="#delete-icon"></use></svg>
    </button>
  `;
  list.append(node);
}



function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  todoItem.push(todo);
  /* console.log(todoItem); */
  renderTodo(todo);
}

const formTodo = document.querySelector(".todojs");
formTodo.addEventListener('submit', event =>{
  event.preventDefault();
  const toDoInput = formTodo.querySelector("input");
  const text = toDoInput.value.trim(); 
  if (text != '') {
    addTodo(text);
    formTodo.value = '';
    input.focus();
  }
});


