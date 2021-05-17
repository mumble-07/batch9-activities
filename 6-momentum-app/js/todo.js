var todoItems = [];

function ToDo (description) {
    // code here
      { this.description = description;
        this.complete = false;}

        ToDo.prototype.completeToDo = function() 
        {this.complete = true;}

        function buildToDo(todo, index) {
            // code here
          
              var toDoShell = document.createElement ('div');
                  toDoShell.className = 'toDoShell';
          
              var toDoText = document.createElement('span');
                  toDoText.innerHTML = todo.description;
                  toDoText.id = index;
                  toDoText.addEventListener('click', completeToDo);
              const toDoCheck = document.createElement('input');
                  toDoCheck.type = 'checkbox';
                  toDoCheck.id = index;
                  toDoCheck.className = 'completeCheckbox';

                  if(ToDo.complete === true)
                  { 
                    ToDo.complete = 'completeText';
                    toDoCheck.checked = true;
                  }
                        toDoShell.appendChild(toDoText);
                        toDoShell.appendChild(toDoCheck);
                  
                return toDoShell;
                }

                function buildToDos(toDos) {
                    // code here
                    const array = toDos.map(buildToDo);
                    return array;
                  }

                  function displayToDos() {
                    // code here
                    const toDoContainer = document.querySelector('#toDoContainer');
                          toDoContainer.innerHTML = '';
                    const arr = buildToDos(toDoItems);
                          arr.forEach(function(element)
                    {
                          toDoContainer.appendChild(element);
                    });
                  }
                  

                  function addToDo() {
                    // code here
                    const ToDoObject = new ToDo(document.querySelector('#toDoInput').value);
                          toDoItems.push(ToDoObject);
                    document.querySelector('#toDoInput').value = '';
                    displayToDos();


                    addButton = document.querySelector('#addButton');
addButton.onclick = addToDo;