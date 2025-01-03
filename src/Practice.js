import React from 'react';
import ReactDOM from 'react-dom/client';
import './TodoList.css'


function fun (props){ return (
<h1>
    {props.item.name}
</h1> )

}

class fun2 extends React.Component {

render () {

    return (
        <h1>
            {this.props.item.name}
        </h1> )
        

}




}







function Practice() {
function AddNumber ( a , b ) {
    return a + b 
}


return (  /*dont forget to alyway return a div (jsx components you cant return values directly this is not js) */
    <div> the sum is {AddNumber (4 , 4)}</div>


);
}



class Page extends React.Component {

render () {

    return (
        <div>
        <Header username='Mina'/>
        <Greeting/>
        </div>



    )
}

}


class Header extends React.Component{
render () {

    return ( 
        <h1> Welcome ,{this.props.username} !</h1>
    )
}





}
class Greeting extends React.Component{

    render (){
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
                style.color ='rgb(63, 37, 0)';}
            else { 
                timeOfday = 'evening'
                style.color ='#1f2d20';
            }
            return (
                <h1 style={style} >Good {timeOfday} to you </h1>
            )
    }


} 































export default Page;
