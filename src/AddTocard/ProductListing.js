import React from 'react';
import img11 from '../Craditem/Img/shop_03.jpg'

const ProductListing = ({ cartItems, incrementItem, decrementItem }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.map((item) => {

        return (
        <div key={item.id}>
          <img src={item.img11} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>

          <div>
            <button onClick={() => decrementItem(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementItem(item)}>+</button>
          </div>
          
        </div>
          )

        }) }
    </div>
  );
};

export default ProductListing;
