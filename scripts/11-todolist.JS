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

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } =todo;
        const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button" onClick = "todoList.splice(${i}, 1);
    renderToDoList();
    
    ">Delete</button>`;


        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



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