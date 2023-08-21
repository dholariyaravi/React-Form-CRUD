import React, { useState, useEffect } from 'react';
import ProductListing from './ProductListing';
import Cart from './Cart';

const Addmen = () => {
  const [products] = useState([
    // your product data
  ]);

  const [cartItems, setCartItems] = useState([]);

   // addToCart... 
  const addToCart = product => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map(item =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // incrementItem.... 
  const incrementItem = item => {
    const updatedItems = cartItems.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCartItems(updatedItems);
  };

  // decrementItem.... 
  const decrementItem = item => {
    const updatedItems = cartItems.map(cartItem =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCartItems(updatedItems);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div>
      <ProductListing products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} incrementItem={incrementItem} decrementItem={decrementItem} />
    </div>
  );
};

export default Addmen;
