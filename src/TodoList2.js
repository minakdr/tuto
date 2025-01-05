import React from 'react';

import './TodoList.css'

const todoList = [
    { id: 1, task: "Buy groceries", completed: false },
    { id: 2, task: "Clean the house", completed: true },
    { id: 3, task: "Finish React project", completed: false },
    { id: 4, task: "Call the plumber", completed: true },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Exercise for 30 minutes", completed: true },
    { id: 7, task: "Pay electricity bill", completed: false },
    { id: 8, task: "Check emails", completed: true },
    { id: 9, task: "Attend meeting", completed: false },
    { id: 10, task: "Cook dinner", completed: true }
];
/*the checkbox will throw a warning because now its technically not an onchange element anymore 
since it depends on the todoList array not the user input  */
function TodoItem (props) { 
    return( <div className='Task'>
    <input type='checkbox' checked= {props.item.completed}/> 
    <p> {props.item.task} </p>

    </div>)
}


function TodoList2() { 
    const TodoItems = todoList.map( (el) => ( 
        < TodoItem key = {el.id} item= { el } />)


    )


return ( 
<div>
<h1>To do list </h1>
{TodoItems }
</div>
);
}

export default TodoList2;
