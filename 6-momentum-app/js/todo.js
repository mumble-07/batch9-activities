let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoSection');
let inputField = document.getElementById('inputTodojs');

addToDoButton.addEventListener('click', function(event){
  event.preventDefault();

    var todoList = document.createElement('p');
    todoList.classList.add('todoList-style');

    todoList.innerText = inputField.value;
    toDoContainer.appendChild(todoList);
    inputField.value = "";

    todoList.addEventListener('click', function(){
    todoList.style.textDecoration = "line-through";
    todoList.style.color = "red";
    })

    todoList.addEventListener('dblclick', function(){
        toDoContainer.removeChild(todoList);
    })
})

















/* 
const listTodo = document.querySelector(".js-listTodo"); */

/* let todoItem = [];

function renderTodo (todo) {
  const list = document.querySelector('js-toDoList');
  const item = document.querySelector(`[data-key='${todo.id}']`);
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

  if (item) {
    list.replaceChild(node, item);
  }
  else {
  list.append(node);
  }
}

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  }; 
  todoItem.push(todo);*/
  /* console.log(todoItem); */
/*   renderTodo(todo);
}

function toggleDone(key) {
   const index = todoItem.findIndex(item => item.id === Number(key));
  todoItem[index].checked = !todoItem[index].checked;
  renderTodo(todoItem[index]);
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

const list = document.querySelector(".js-toDoList");
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
}); */

