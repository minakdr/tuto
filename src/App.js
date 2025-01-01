import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';


const MyInfos = () => {
return (
  <div>
    <h1>Mina</h1>
    <p>Blue is my favorite color , I love skyrim and I'm currently learning react form Youtube</p>
    <ul style={{ listStyleType: "none" }}> 
            <li>Germany</li>
            <li>Italy</li>
            <li>Budapest</li>
          </ul>
  </div>
)

}

function App() {
  return ( 
    <div> {/* had to use  div because h1 and p are sibling elements and the retun needs to only return one parent element so I had to wrap them into 1 div  */}
          <h1>Hello World</h1> 
          <p>this a paragrph</p> 
          <ul style={{ listStyleType: "none" }}> {/* Inline CSS also needs to be in camelCase */}
            <li>first list item</li>
            <li>second list item</li>
            <li>third list item</li>
          </ul>
          <MyInfos/>
    </div>

  );
}

export default App;
