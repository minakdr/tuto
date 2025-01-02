import React from 'react';
import ReactDOM from 'react-dom/client';
import './TodoList.css'



function ContactCard(props) {
    console.log(props);
return ( 
 <div className='contactCard'>

    
    <img src={props.imgurl} alt='' />
    <h1>{props.name}</h1>
    <p>Phone : {props.phone}</p>
    <p>email : {props.email}</p>

 </div>
)

}

function Contact() {
    return(
<div>
<ContactCard imgurl='./badis.jpg' name='Lhadj badis' phone='0221481515' email = 'badis.chirurgie@gmail.fr'/>

<ContactCard imgurl='./dja3fer.jpg' name='dja3fer' phone='0224946255' email = 'dja3fer.tqtfrere@gmail.fr'/>

<ContactCard imgurl='./belahmer.jpg' name='Mr belahmer' phone='0225994815' email = 'n7ab.lefrit@gmail.fr'/>

<ContactCard imgurl='./zoulikha.jpg' name='Madame zoulikha' phone='0295881537' email = 'zouzouCoiffure@outlook.fr'/>
</div>
    )
}

export default Contact;
