// CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <span>{item.name} - ${item.price} x {item.quantity}</span>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
