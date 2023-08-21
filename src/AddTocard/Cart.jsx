import React, { useState } from 'react';

const Cart = ({ products, addToCart }) => {
  return (
    <div>
      {products.map((product) => {
        return (
 
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
           )

          }) }
    </div>
  );
};

export default Cart;
