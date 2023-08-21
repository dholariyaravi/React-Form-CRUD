
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import DialogActions from '@mui/material/DialogActions';

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


const Product = ({addToCart}) => {
       
    const dataim = [
        
        {
            id : 1,
            Product: "Product1",
            Billno: "123",
            Reviews :"1234",
            photo: img111,
            quantity : 1 ,
        }, {
        
            id : 2,
            Product: "Product2",
            Billno: "4523",
            Reviews :"6334",
            photo: img112,
            quantity : 0 ,
        }, {
            id : 3,
            Product: "Product3",
            Billno: "1444",
            Reviews :"2234",
            photo: img113,
            quantity : 0 ,
        }
            , {
            id : 4,
            Product: "Product4",
            Reviews :"3234",
            Billno: "4552",
            photo: img114,
            quantity : 0 ,
        }, {
            id : 5,
            Product: "Product3",
            Billno: "1444",
            Reviews :"2234",
            photo: img115,
            quantity : 0 ,
        }, {
            id : 6,
            Product: "Product3",
            Billno: "1444",
            Reviews :"2234",
            photo: img117,
            quantity : 0 ,
        }, {
            id : 7,
            Product: "Product3",
            Billno: "1444",
            Reviews :"2234",
            photo: img116,
            quantity : 0 ,
        }, {
            id : 8,
            Product: "Product3",
            Billno: "1444",
            Reviews :"2234",
            photo: img120,
            quantity : 0 ,
        }];



    return (
        <>
        <h2 class="bg-green">PROUDCT LIST</h2>
        <div class="container py-5">
            <div class="row">
                {dataim.map((dataim, ind) => (

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

                            </div>

                            <button className="delete button btn btn-dark my-0"
                             onClick={() => addToCart(dataim)}>Add to Cart</button>
                          {/*                              
                            <button className="delete button btn btn-dark my-0" onClick={() => {
                                    const confirmBox = window.confirm("Add to Cart.....🙂🙂")
                                    if (confirmBox === true) {
                                        addToCart(dataim)}  }}>
                                     Add to Cart
                                </button> */}


                        {/* <Dialog
                        >
                            <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                        
                            <DialogActions>
                            <button className="delete button btn btn-dark my-0"
                             onClick={() => addToCart(dataim)}>Add to Cart</button>
                                                     
                            </DialogActions>
                        </Dialog> */}
                                                    
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    </>
            
    );
}

export default Product;
