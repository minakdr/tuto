import React from 'react';

import './TodoList.css'


const Segment = () => {  /* functional component so arrow fnct  */
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

const date = new Date()
const hour = date.getHours()
let timeOfday 
let style = {}

if (hour < 12) { 
    timeOfday = 'morning' ;
    style.color ='rgb(99, 203, 255)';
}
else if ( hour < 18 ) { 
    timeOfday = 'afternoon' ;
    style.color ='rgb(130, 77, 4)';}
else { 
    timeOfday = 'evening'
    style.color ='#1f2d20';
}


return ( 

<div>
<img className="img" src="./plants.jpg" alt="Plants" />
<img className="img" src="./plants.jpg" alt="Plants" />
<img className="img" src="./plants.jpg" alt="Plants" />

<h1 style={style}>Good {timeOfday} ,feeling productive ?</h1>

<Segment/>   
<Segment/>   
<Segment/>   
<Segment/>   
<Segment/>   

</div>


);
}

export default TodoList;
