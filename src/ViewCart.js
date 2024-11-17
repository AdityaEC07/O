import React from 'react';
import { useLocation } from 'react-router-dom';
// import bgImage from'./Video/background-img.mp4'
const ViewCart = () => {
  const location = useLocation();
  const { Cart } = location.state;
  // console.log(cart,"dddd");

  return (
    
    <div>
       
      <h2>View Cart</h2>
      <ol>
        
        {Cart.map((item, index) => (
          <li key={index}>
            {item.name} - Quantity:  {item.quantity}
            {/* <video autoPlay loop muted>
             <source src={bgImage} type="video/mp4" />
             </video> */}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ViewCart;  