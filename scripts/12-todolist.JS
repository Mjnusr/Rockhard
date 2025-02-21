const todoList = [{
    name: 'dinner',
    dueDate: '2025-01-23'},
    { 
    name: 'dishes',
    dueDate: '2025-01-25'
}];

renderToDoList();


function renderToDoList()   {
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index) {
     
            const { name, dueDate } =todoObject;
            const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-button js-delete-todo-button"
        >Delete</button>`;
            todoListHTML += html;
            
    });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button').forEach((deletebutton, index) =>    {
        deletebutton.addEventListener('click',() =>     {
        todoList.splice(index, 1);
        renderToDoList();
        })
    });
}

    document.querySelector('.js-todo-button').addEventListener('click', () =>    {
        addToDo();
    });


function addToDo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement  = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
}   );
   
    inputElement.value = '';
    renderToDoList();
}