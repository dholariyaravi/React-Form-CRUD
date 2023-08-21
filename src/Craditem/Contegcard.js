import React, { useContext } from "react";
import Item from './Item';



const Contegcard = () => {

    
  return (
    <div>
      <div className="container-fluid">
        <hr/>
        {/* <div className="cart-icon">
          <i class="fa fa-cart-arrow-down" aria-hidden="true">
            8
          </i>
          <hr />
        </div> */}
 {/*
        <div class="row text-center py-3">
          <div class="col-lg-6 m-auto">
            <h2 class="bg-green">PROUDCT LIST</h2>
          </div>
        </div> */}

        <div>
          
         
          <Item /> ;
        </div>
      </div>
    </div>
  );
};

export default Contegcard;
