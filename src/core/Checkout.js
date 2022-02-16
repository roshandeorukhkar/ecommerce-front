import React, { useState, useEffect } from 'react';
import { getProducts, getBraintreeClientToken, processPayment, createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
import Card from './Card';
import { isAuthenticated } from '../common/utils';
import { Link } from 'react-router-dom';
// import "braintree-web"; // not using this package
//import DropIn from 'braintree-web-drop-in-react';
import Layout from './Layout';

const Checkout = ({ products, setRun = f => f, run = undefined }) => {
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    });

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;

    const getToken = (userId, token) => {
        getBraintreeClientToken(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
                setData({ ...data, error: data.error });
            } else {
                console.log(data);
                setData({ clientToken: data.clientToken });
            }
        });
    };

    useEffect(() => {
        getToken(userId, token);
    }, []);

    const handleAddress = event => {
        setData({ ...data, address: event.target.value });
    };

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showCheckout = () => {
        return isAuthenticated() ? (
            <div>{showDropIn()}</div>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to checkout</button>
            </Link>
        );
    };

    let deliveryAddress = data.address;

    const buy = () => {
        setData({ loading: true });
        // send the nonce to your server
        // nonce = data.instance.requestPaymentMethod()
        let nonce;
        let getNonce = data.instance
            .requestPaymentMethod()
            .then(data => {
                // console.log(data);
                nonce = data.nonce;
                // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
                // and also total to be charged
                // console.log(
                //     "send nonce and total to process: ",
                //     nonce,
                //     getTotal(products)
                // );
                const paymentData = {
                    paymentMethodNonce: nonce,
                    amount: getTotal(products)
                };

                processPayment(userId, token, paymentData)
                    .then(response => {
                        console.log(response);
                        // empty cart
                        // create order

                        const createOrderData = {
                            products: products,
                            transaction_id: response.transaction.id,
                            amount: response.transaction.amount,
                            address: deliveryAddress
                        };

                        createOrder(userId, token, createOrderData)
                            .then(response => {
                                emptyCart(() => {
                                    setRun(!run); // run useEffect in parent Cart
                                    console.log('payment success and empty cart');
                                    setData({
                                        loading: false,
                                        success: true
                                    });
                                });
                            })
                            .catch(error => {
                                console.log(error);
                                setData({ loading: false });
                            });
                    })
                    .catch(error => {
                        console.log(error);
                        setData({ loading: false });
                    });
            })
            .catch(error => {
                // console.log("dropin error: ", error);
                setData({ ...data, error: error.message });
            });
    };

    const showDropIn = () => (
        <div onBlur={() => setData({ ...data, error: '' })}>
            {data.clientToken !== null && products.length > 0 ? (
                <div>
                    <div className="gorm-group mb-3">
                        <label className="text-muted">Delivery address:</label>
                        <textarea
                            onChange={handleAddress}
                            className="form-control"
                            value={data.address}
                            placeholder="Type your delivery address here..."
                        />
                    </div>

                    
                    <button onClick={buy} className="btn btn-success btn-block">
                        Pay
                    </button>
                </div>
            ) : null}
        </div>
    );

    const showError = error => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = success => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            Thanks! Your payment was successful!
        </div>
    );

    const showLoading = loading => loading && <h2 className="text-danger">Loading...</h2>;

    return (
        
        <Layout
            title=""
            description=""
            className="container-fluid"
        >
            {/*<div>
            <h2>Total: ${getTotal()}</h2>
            {showLoading(data.loading)}
            {showSuccess(data.success)}
            {showError(data.error)}
            {showCheckout()}
            </div>*/}
            <div className="bz_inner_page_navigation float_left">
               <div className="container custom_container">
                  <div className="inner_menu float_left">
                     <ul>
                        <li><a href="#"> <span><i className="fas fa-home"></i></span> </a></li>
                        <li className="active"><a href="#"> <span><i className="fas fa-angle-right"></i></span> Checkout</a></li>
                     </ul>
                  </div>
               </div>
            </div>

            <div className="bz_product_grid_content_main_wrapper float_left">
               <div className="container custom_container">
                  <div className="row">
                     <div className="col-lg-8 col-md-12 col-12">
                        <div className="bz_checkout_main_wrapper float_left">
                           <div className="accordion" id="accordionExample">
                              <div className="card checkout_accord">
                                 <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                       <button type="button" className="btn btn-link" data-toggle="collapse" data-target="#collapseOne">Checkout Method <span><i className="fa fa-minus"></i></span> </button>
                                    </h2>
                                 </div>
                                 <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                       <div className="row">
                                          <div className="col-md-6 col-12">
                                             <div className="new_customer">
                                                <h3>New Customer</h3>
                                                <form>
                                                   <p>
                                                      <input type="radio" id="test1" name="radio-group" checked="checked"/>
                                                      <label htmlFor="test1">Register Account</label>
                                                   </p>
                                                   <p>
                                                      <input type="radio" id="test2" name="radio-group"/>
                                                      <label htmlFor="test2">Stayc As Guest</label>
                                                   </p>
                                                </form>
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in.</p>
                                                <a className="submit_btn" href="#">Continue</a>
                                             </div>
                                          </div>
                                          <div className="col-md-6 col-12">
                                             <div className="login_form">
                                                <h3>Log In</h3>
                                                <form>
                                                   <div className="form-group row">
                                                      <div className="col-12">
                                                         <label>Phone Number</label>
                                                      </div>
                                                      <div className="col-12">
                                                         <input type="password" placeholder="enter here"/>
                                                      </div>
                                                   </div>
                                                </form>
                                                <a className="submit_btn" href="#">Send OTP</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="card checkout_accord">
                                 <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                       <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo">Billing Information <span><i className="fa fa-plus"></i></span> </button>
                                    </h2>
                                 </div>
                                 <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                    <div className="card-body">
                                       <div className="billing_info float_left">
                                          <form>
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>First Name*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>Last Name*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>Email*</label>
                                                   <input type="email" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>Phone No.*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>Company Name*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>Address*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>Select your Country*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>City*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>State*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>Zip Code*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             
                                             <div className="form-group row">
                                                <div className="col-md-12 col-12">
                                                   <input type="checkbox" id="scales" name="scales" checked=""/>
                                                   <label htmlFor="scales">Ship to Same Address As Billing</label>
                                                </div>
                                             </div>
                                          </form>
                                          <a className="submit_btn" href="#">Continue</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="card checkout_accord">
                                 <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                       <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree"> Shipping Information <span><i className="fa fa-plus"></i></span> </button>                     
                                    </h2>
                                 </div>
                                 <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                    <div className="card-body">
                                       <div className="billing_info float_left">
                                          <form>
                                             
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>First Name*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>Last Name*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>Email*</label>
                                                   <input type="email" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>Phone No.*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>Company Name*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>Address*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>Select your Country*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>City*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             <div className="form-group row">
                                                <div className="col-md-6 col-12">
                                                   <label>State*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   <label>Zip Code*</label>
                                                   <input type="text" className="form-control" placeholder="Enter here"/>
                                                </div>
                                             </div>
                                             <div className="form-group row">
                                                <div className="col-md-12 col-12">
                                                   <label>Special Request*</label>
                                                   <textarea className="form-control" rows="4"></textarea>
                                                </div>
                                             </div>
                                          </form>
                                          <a className="submit_btn" href="#">Continue</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                             
                              <div className="card checkout_accord">
                                 <div className="card-header" id="headingFour">
                                    <h2 className="mb-0">
                                       <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour"> Payment Method <span><i className="fa fa-plus"></i></span> </button>                     
                                    </h2>
                                 </div>
                                 <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                    <div className="card-body">
                                       <div className="payment_method float_left">
                                          <form>
                                             <p>
                                                <input type="radio" id="test3" name="radio-group" checked=""/>
                                                <label className="direct_bank" htmlFor="test3">Direct Bank Transfer
                                                <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                                                </label>
                                             </p>
                                             <p>
                                                <input type="radio" id="test4" name="radio-group"/>
                                                <label htmlFor="test4">Cheque Payments
                                                <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                                                </label>
                                             </p>
                                             <p>
                                                <input type="radio" id="test5" name="radio-group"/>
                                                <label htmlFor="test5">Cash On Delivery
                                                <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                                                </label>
                                             </p>
                                             <p>
                                                <input type="radio" id="test6" name="radio-group"/>
                                                <label htmlFor="test6">Pay Pal</label>
                                             </p>
                                          </form>
                                          <div className="payment_card">
                                             <img className="img-fluid" src="../assets/images/payment_card.png" alt="card"/>
                                             <a className="submit_btn" href="#">Place Order</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-12 col-12">
                        <div className="your_order float_left">
                           <h3>Your Order</h3>
                           <div className="order_details">
                              <p> Dress with belt × 2 <span><i class="fas fa-rupee-sign fa-sm"></i>774.00</span> </p>
                              <p> Dress with belt × 2 <span><i class="fas fa-rupee-sign fa-sm"></i>774.00</span> </p>
                              <p> CART SUBTOTAL <span><i class="fas fa-rupee-sign fa-sm"></i>15,48.00</span> </p>
                              <p> SHIPPING <span><i class="fas fa-rupee-sign fa-sm"></i>15,48.00</span> </p>
                           </div>
                           <div className="order_rate float_left">
                              <h3>Order Total <span><i class="fas fa-rupee-sign"></i>1172.00</span> </h3>
                           </div>
                           <a className="placeholder_btn" href="#">Place Order</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </Layout>
    );
};

export default Checkout;
