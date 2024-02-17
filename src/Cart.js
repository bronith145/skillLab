// Cart.js
import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      }));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
