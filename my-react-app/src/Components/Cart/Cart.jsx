import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, onPlaceOrder }) => {
  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    onPlaceOrder();
    setOrderPlaced(true);
  };

  return (
    <>
      <h1>Cart</h1>
      <div className='cart'>
        {cartItems.map(item => (
          <div key={item.productName} className='cart-item'>
            <img src={item.image} alt={item.productName} />
            <p>Product Name: {item.productName}</p>
            <p>Price: {item.price}</p>
          </div>
        ))}
        <h3>Total Price: {totalPrice}</h3>
        <button onClick={handlePlaceOrder}>Place Order</button>
        {orderPlaced && <p>Your order has been placed successfully!</p>}
      </div>
    </>
  );
}

export default Cart;
