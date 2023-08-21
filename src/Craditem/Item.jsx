import React, { useEffect, useState } from 'react';
import "./stylesadd.css"

import img111 from './Img/shop_04.jpg';
import img112 from './Img/shop_03.jpg'
import img113 from './Img/shop_09.jpg'
import img114 from './Img/shop_05.jpg'
import img115 from './Img/shop_06.jpg'
import img116 from './Img/shop_07.jpg'
import img117 from './Img/shop_02.jpg'
import img118 from './Img/shop_08.jpg'
import img119 from './Img/shop_09.jpg'
import img120 from './Img/shop_10.jpg'
import { useNavigate } from 'react-router-dom';
import { array } from 'yup';
import Product from './Product';


const PAGE_PRODUCTS = 'dataim';
const PAGE_CART = 'cart';


const Item = () => {

    // useEffect(async () => {
    //     const savdo = localStorage.getItem('cart11');
    //     const invalue = JSON.parse(savdo)
    //     return await invalue  || " ";
    // }, []);


    // const [cart, setCart] = useState(() => {
    //     const saved = localStorage.getItem("cart11");
    //     const initialValue = JSON.parse(saved);
    //     return initialValue || "";
    // });
    
  
    const [cart, setCart] = useState([])

    console.log(cart);

    const [page, setpage] = useState(PAGE_PRODUCTS);

     
    // data json from ment .........

      useEffect(() => {
        localStorage.setItem('cart11', JSON.stringify(cart));

      }, [cart]);
    //  ================================== 

    const addToCart = dataim => { 
       
        const existingItem = cart.find(item => item.id === dataim.id);
        if (existingItem) {
            const updatedItems = cart.map(item =>
                item.id === existingItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
                );
                setCart(updatedItems);
            }else{
                setCart([...cart, {...dataim, quantity: 1}]);

            }
    
        // setCart([...cart, { ...dataim }]);

        console.log('we are add a card');
    };
    


    // remove FromCart...... 
    const removeFromCart = (dataimToremove) => {
        setCart(
            cart.filter((dataim) => dataim !== dataimToremove),
            localStorage.removeItem('cart11', JSON.stringify([...cart,])),
        )
    }

    const navigetTo = (nextpage) => {
        setpage(nextpage);
    }

    //   inctement by card ...... 
    const inctement = count => {
        const updatedItems = cart.map(cart =>
            cart.id === count.id ? { ...cart, quantity: cart.quantity + 1 } : cart
        );
        setCart(updatedItems);
    };

    //   decrement by card .......
    const decrement = count => {
        const updatevalue = cart.map(cart =>
            cart.id === count.id && cart.quantity > 1
                ? { ...cart, quantity: cart.quantity - 1 }
                : cart
        );
        setCart(updatevalue);
    }


    //    ================ rederproducts ================= 
    // const rederproducts = () => (
    //     <>
    //         <h2 class="bg-green">PROUDCT LIST</h2>
    //         <div class="container py-5">
    //             <div class="row">
    //                 {dataim.map((dataim, ind) => (

    //                     <div class="col-12 col-md-3 mb-4" key={ind}>
    //                         <div class="card h-100">
    //                             <a href="shop-single.html" className='img_men'>
    //                                 <img src={dataim.photo} class="card-img-top" alt="..." />
    //                             </a>
    //                             <div class="card-body">
    //                                 <ul class="list-unstyled d-flex justify-content-between">
    //                                     <li>
    //                                         <i class="text-warning fa fa-star"></i>
    //                                         <i class="text-warning fa fa-star"></i>
    //                                         <i class="text-warning fa fa-star"></i>
    //                                         <i class="text-warning fa fa-star"></i>
    //                                         <i class="text-muted fa fa-star"></i>
    //                                     </li>
    //                                     <li class="text-muted text-right"></li>
    //                                 </ul>
    //                                 <a href="shop-single.html" class="h2 text-decoration-none text-dark"> <h4>{dataim.Product}</h4>  </a>
    //                                 <p class="card-text">
    //                                     Lorem ipsum dolor sit amet, consectetur adipisicing
    //                                 </p>
    //                                 <p class="text-muted">Reviews <span>{dataim.Reviews}</span> </p>

    //                             </div>

    //                             {/* <button onClick={() => addToCart(dataim)}>Add to Cart</button> */}

    //                             <button className="delete button btn btn-dark my-0" onClick={() => {
    //                                     const confirmBox = window.confirm("Add to Cart.....🙂🙂")
    //                                     if (confirmBox === true) {
    //                                         addToCart(dataim)}  }}>
    //                                      Add to Cart
    //                                 </button>

    //                         </div>
    //                     </div>
    //                 )
    //                 )}
    //             </div>
    //         </div>
    //     </>
    // )

    //    ==================== renderCart ================== 

    const renderCart = () => (
        <>
            <h1>cart</h1>
            <div class="container py-5">
                <div class="row">
                    {cart.map((dataim, ind) => (

                        <div class="col-12 col-md-3 mb-4" key={ind}>
                            <div class="card h-100">
                                <a href="shop-single.html" className='img_men'>
                                    <img src={dataim.photo} class="card-img-top" alt="..." />
                                </a>
                                <div class="card-body">
                                    <ul class="list-unstyled d-flex justify-content-between">
                                        <li>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-warning fa fa-star"></i>
                                            <i class="text-muted fa fa-star"></i>
                                        </li>
                                        <li class="text-muted text-right"></li>
                                    </ul>
                                    <a href="shop-single.html" class="h2 text-decoration-none text-dark"> <h4>{dataim.Product}</h4>  </a>
                                    <p class="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                    </p>
                                    <p class="text-muted">Reviews <span>{dataim.Reviews}</span> </p>
                                    <div className='px-1'>
                                        <i class="fa fa-minus" aria-hidden="true" onClick={() => decrement(dataim)}></i>
                                        <input type='text' placeholder={dataim.quantity} className='add_card' />
                                        <i class="fa fa-plus" aria-hidden="true" onClick={() => inctement(dataim)}></i>
                                        {/* <button onClick={ () => inctement(dataim)}> </button>
                                            <button onClick={ () => decrement(dataim)}>  </button> */}
                                    </div>
                                </div>

                                <button className="delete button btn btn-dark my-0" onClick={() => {
                                    const confirmBox = window.confirm("Do you want to delete this Crumb?..😒😒")
                                    if (confirmBox === true) {
                                        removeFromCart(dataim)
                                    }
                                }}>
                                    Delete
                                </button>

                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>

    )


    return (
        <div>
            <header className='center_btn '>
                <button className='btn_style btn btn-dark' onClick={() => navigetTo(PAGE_CART)}>Go To Cart({cart.length})</button>

                <button className='btn btn-dark' onClick={() => navigetTo(PAGE_PRODUCTS)}>View Products</button>
            </header>
            {page === PAGE_PRODUCTS && <Product addToCart={addToCart}   />}

            {page === PAGE_CART && renderCart()}

        </div>
    );
}

export default Item;
