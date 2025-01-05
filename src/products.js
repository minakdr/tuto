import React from 'react';


const productslist = [
    { id: 1, name: "Laptop", price: 899.99, description: "A high-performance laptop for work and entertainment." },
    { id: 2, name: "Smartphone", price: 699.99, description: "A sleek smartphone with a powerful camera and long battery life." },
    { id: 3, name: "Wireless Earbuds", price: 49.99, description: "Compact and lightweight earbuds with excellent sound quality." },
    { id: 4, name: "Tablet", price: 399.99, description: "A versatile tablet perfect for browsing, streaming, and gaming." },
    { id: 5, name: "Smartwatch", price: 199.99, description: "A stylish smartwatch with fitness tracking and notifications." },
    { id: 6, name: "Gaming Console", price: 499.99, description: "A next-gen gaming console with stunning graphics and speed." },
    { id: 7, name: "Keyboard", price: 29.99, description: "A durable keyboard with a comfortable typing experience." },
    { id: 8, name: "Monitor", price: 149.99, description: "A high-definition monitor for sharp and vibrant visuals." },
    { id: 9, name: "Mouse", price: 19.99, description: "A responsive and ergonomic mouse for everyday use." },
    { id: 10, name: "External Hard Drive", price: 89.99, description: "A reliable hard drive for secure data storage and backup." },
    ];
    
//we dfine the Product component ( we use this to render one single product details)
function Product(props) {
return (
    <div>
    <h2>{props.item.name}</h2>
    <p>{props.item.description}</p>
    <p>Price: {props.item.price}</p>
    </div>
);
}

//we define the Products component
function Products() {
/* productsComponents is a list of components we get from mapping through the products list 
    The arrow function (el) => ... takes each array element and returns a JSX component
    Product (in green) is the component, the key is important to avoid a warning, and we pass the whole product object as "item".
    el is an  object   
*/
const productsComponents = productslist.map((el) => (
    /*its like Product is contrxutin a producting using the key and item from productslist */
    <Product key={el.id} item={el} />
));

return (
    /*we render the whole list of products  */
    <div>
    <h1>Product List</h1>
    {productsComponents}
    </div>
);
}


export default Products;
