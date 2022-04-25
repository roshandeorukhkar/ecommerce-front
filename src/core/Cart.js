import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Card from './Card';
import Checkout from './Checkout';
import $ from 'jquery';
import { getCart ,addItem } from './cartHelpers';
import { useRecoilState,useRecoilValue } from 'recoil';
import { cartFetchData } from "../recoil/carts/cartHelpers";


const Cart = () => {
   const [items, setItems] = useState([]);
   const [run, setRun] = useState(false);
   const {
      cartData ,
      clength,
      total
  } = useRecoilValue(cartFetchData);

    useEffect(() => {
        setItems(cartData);
    }, [run]);

    const showItems = items => {
        return (
            <div>
                <h2>Your cart has {`<i className="fas fa-rupee-sign"></i>{items.length}`} items</h2>
                <hr />
                {items.map((product, i) => (
                    <Card
                        key={i}
                        product={product}
                        showAddToCartButton={false}
                        cartUpdate={true}
                        showRemoveProductButton={true}
                        setRun={setRun}
                        run={run}
                    />
                ))}
            </div>
        );
    };

    const noItemsMessage = () => (
        <h2>
            Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
        </h2>
    );

    return (
        <Layout
            title=""
            description=""
            className="container-fluid"
        >
            {/*<div className="row">
                <div className="col-6">{items.length > 0 ? showItems(items) : noItemsMessage()}</div>

                <div className="col-6">
                    <h2 className="mb-4">Your cart summary</h2>
                    <hr />
                    <Checkout products={items} setRun={setRun} run={run} />
                </div>
            </div>*/}

            <div className="bz_inner_page_navigation float_left">
               <div className="container custom_container">
                  <div className="inner_menu float_left">
                     <ul>
                        <li><a href="#"> <span><i className="fas fa-home"></i></span> </a></li>
                        <li><a href="#"> <span><i className="fas fa-angle-right"></i></span> My Cart</a></li>
                        <li className="active"><a href="#"> <span><i className="fas fa-angle-right"></i></span>Shopping Cart</a></li>
                     </ul>
                  </div>
               </div>
            </div>    

            <div className="bz_product_grid_content_main_wrapper float_left">
               <div className="container custom_container">
                  <div className="row">
                     <div className="col-lg-8 col-md-12 col-12">
                        <div className="bz_cart_main_wrapper float_left">
                           <div className="cart_tbl">
                              <div className="table table-responsive">
                                 <table className="table table-borderless">
                                    <thead>
                                       <tr>
                                          <th className="text-right">Product</th>
                                          <th></th>
                                          <th>Quantity</th>
                                          <th>Unit Price</th>
                                          <th>Total</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td><a href="#">x</a> <img className="img-fluid" src="images/instra_a1.jpg" alt=""/></td>
                                          <td>Womens Purse</td>
                                          <td>
                                             <div className="number_pluse">
                                                <div className="nice-number"><button type="button">-</button><input type="number" defaultValue="1"/><button type="button">+</button></div>
                                             </div>
                                          </td>
                                          <td><i className="fas fa-rupee-sign fa-sm"></i>378 x 2</td>
                                          <td><i className="fas fa-rupee-sign fa-sm"></i>744.00</td>
                                       </tr>
                                       <tr>
                                          <td><a href="#">x</a> <img className="img-fluid" src="images/instra_a2.jpg" alt=""/></td>
                                          <td>Women T-shirt</td>
                                          <td>
                                             <div className="number_pluse">
                                                <div className="nice-number"><button type="button">-</button><input type="number" defaultValue="1"/><button type="button">+</button></div>
                                             </div>
                                          </td>
                                          <td><i className="fas fa-rupee-sign fa-sm"></i>378 x 2</td>
                                          <td><i className="fas fa-rupee-sign fa-sm"></i>744.00</td>
                                       </tr>
                                       <tr>
                                          <td><a href="#">x</a> <img className="img-fluid" src="images/instra_a3.jpg" alt=""/></td>
                                          <td>Men's Shoes</td>
                                          <td>
                                             <div className="number_pluse">
                                                <div className="nice-number"><button type="button">-</button><input type="number" defaultValue="1"/><button type="button">+</button></div>
                                             </div>
                                          </td>
                                          <td><i className="fas fa-rupee-sign fa-sm"></i>378 x 2</td>
                                          <td><i className="fas fa-rupee-sign fa-sm"></i>744.00</td>
                                       </tr>
                                       <tr>
                                          <td><a href="#">x</a> <img className="img-fluid" src="images/instra_a4.jpg" alt=""/></td>
                                          <td>Mens Glasses</td>
                                          <td>
                                             <div className="number_pluse">
                                                <div className="nice-number"><button type="button">-</button><input type="number" defaultValue="1"/><button type="button">+</button></div>
                                             </div>
                                          </td>
                                          <td><i className="fas fa-rupee-sign fa-sm"></i>378 x 2</td>
                                          <td><i className="fas fa-rupee-sign fa-sm"></i>744.00</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <div className="cart_coupan">
                                 <div className="update_btn">
                                    <a className="submit_btn" href="#">Update cart</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-12">
                        <div className="your_order float_left">
                           <h3>Your Order</h3>
                           <div className="order_details">
                              {cartData.map((res,i) =>(
                                 <p> {res.name} <span><i className="fas fa-rupee-sign fa-sm"></i>{res.price}</span> </p>
                              ))}
                              {/* <p> Dress with belt × 2 <span><i className="fas fa-rupee-sign fa-sm"></i>774.00</span> </p>
                              <p> Dress with belt × 2 <span><i className="fas fa-rupee-sign fa-sm"></i>774.00</span> </p>
                              <p> CART SUBTOTAL <span><i className="fas fa-rupee-sign fa-sm"></i>15,48.00</span> </p>
                              <p> SHIPPING <span><i className="fas fa-rupee-sign fa-sm"></i>15,48.00</span> </p> */}
                           </div>
                           <div className="order_rate float_left">
                              <h3>Order Total <span><i className="fas fa-rupee-sign"></i>{total}</span> </h3>
                           </div>
                           <a className="placeholder_btn" href="/checkout">Place Order</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

        </Layout>
    );
};

export default Cart;
