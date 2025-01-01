import React from 'react';
import ReactDOM from 'react-dom/client';
import './TodoList.css'


const Segment = () => {
    return ( 
<div className='Segment'>


<div className='Task'>
<input type="checkbox" />
<p>Clean kitchen </p>
</div>

<div className='Task'>
<input type="checkbox" />
<p>Cook dinner </p>
</div>

<div className='Task'>
<input type="checkbox" />
<p>Learn React </p>
</div>

</div>
    )
}



function TodoList() {
return ( 

<div>
<img className="img" src="./plants.jpg" alt="Plants" />
<img className="img" src="./plants.jpg" alt="Plants" />
<img className="img" src="./plants.jpg" alt="Plants" />
<h1>My to-do List</h1>


<Segment/>   
<Segment/>   
<Segment/>   
<Segment/>   
<Segment/>   

</div>


);
}

export default TodoList;
