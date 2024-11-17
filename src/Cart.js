import React, { useState, useEffect } from 'react';




import dummyFoodData from './CaardData';
import { useNavigate } from 'react-router-dom'
// import './Cart.css'; 


const Cart = () => {
  const [CartDate, setCartDate] = useState([]);
  const [Cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // setCartDate(dummyFoodData)
    setCartDate(dummyFoodData.map(item => ({ ...item, quantity: 0 })));
  }, []);

  const handleAdd = (id) => {
    const updatedCart = CartDate.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartDate(updatedCart);
  const productToAdd = { ...CartDate.find(item => item.id === id),quantity:1 };
  setCart([...Cart, productToAdd]);
  }

  const handleRemove = (id) => {
    const updatedCart = CartDate.map(item =>
      item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartDate(updatedCart);
   };
  

  


  const getTotalPrice = () => {
    return CartDate.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleViewCart = () => {
    // navigate('/view',);
    navigate('/view', { state: { Cart } });
  };

  const handleAddToCart = (id) => {
    console.log(id);
    const updatedCart = CartDate.map(item =>
      
      
      item.id === id ? { ...item, quantity: 1 } : item
    );
    setCartDate(updatedCart);

  };

  return (


    
    <div className="cart-container"  style={{backgroundImage :'URL("https://images.unsplash.com/photo-1526779259212-939e64788e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfDB8MHx8fDA%3D")'}}>

        <h2>FOOD GROW  <i class="bi bi-cart2"></i> </h2>
      <h1 style={{color:"whitesmoke",fontStyle:"inherit"}} ><p>Total Price: ${getTotalPrice()}</p></h1>

      <button id='one' onClick={handleViewCart}>View Cart</button>

      <ul className="cart-items.length">

        {CartDate.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
        
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <p>quantity:{item.quantity}</p>
             
              {item.quantity === 0 ? (
                <button  onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
              ) : (
                <div>
                  <button id='one' onClick={() => handleRemove(item.id)}><i class="bi bi-trash"></i></button>
                  {/* <span>{item.quantity}</span> */}
                  <button onClick={() => handleAdd(item.id)}>+</button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <h1  style={{color:"whitesmoke",fontStyle:"inherit"}} ><p>Total Price: ${getTotalPrice()}</p></h1>
    </div>
  );
};

export default Cart;








// let arr=[1,2,3,4,5]

// let sum=   arr.reduce((a,b)=>{
//   return a+b
// })
// console.log(sum);