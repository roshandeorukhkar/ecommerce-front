import React, { useState, useEffect } from 'react';
import { isAuthenticated } from '../common/utils';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import { cartFetchData,cartList } from '../recoil/carts/cartHelpers';
import { useRecoilState , useRecoilValue  } from 'recoil';
import YourOrder from './YourOrder';
import { useForm } from "react-hook-form";
import { createOrder } from './apiCore';
import { useHistory } from 'react-router-dom';
import { read } from '../customer/apiUser';

const Checkout = ({ products, setRun = f => f, run = undefined }) => {
   
   
   const { register , handleSubmit , setValue ,reset, watch, formState : {errors} } = useForm();
   
   const history = useHistory();

   const [tabOrderInformation , setTabOrderInformation] = useState(false);
   //shipping
   const [tabShippingInformation , setTabShippingInformation] = useState(false);
   const [tabPayment, setTabPayment] = useState(false);
   //payment
   const { cartData, clength, total } = useRecoilValue(cartFetchData);
   const [quantity, setQuantity] = useState(1);
   const { user ,token } = isAuthenticated();
   const userId = user._id;

   const [cartItem, setCartItem] = useRecoilState(cartList);
   const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    });

    const removeCartItem = (productId) => (e) => {
      e.preventDefault();
      setCartItem((cartItem) => cartItem.filter((item) => item.id !== productId));
    };
  
    const quantityIncrement = (productId) => (e) => {
      e.preventDefault();
      if (cartItem.some((item) => item.id === productId && item.quantity >= 1)) {
        setCartItem((cartItem) =>
          cartItem.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
        setQuantity(quantity + 1);
      }
      setRun(!run);
    };
  
    const quantityDecrement = (productId) => (e) => {
      e.preventDefault();
      if (cartItem.some((item) => item.id === productId && item.quantity > 1)) {
        setCartItem((cartItem) =>
          cartItem.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
        setQuantity(quantity - 1);
      }
      setRun(!run);
    };

    const getUserData = () =>{
       if(userId){
          let defaultValues = {};
          read(userId, token).then((data) => {
             console.log("data",data.email);
             defaultValues.email = data.email;
             defaultValues.address = data.address;
             defaultValues.country = data.country;
             defaultValues.pinCode = data.pincode;
             defaultValues.city = data.city;
             defaultValues.state = data.state;
             reset({...defaultValues})
            })
         }
    }

    useEffect(() => {
      getUserData();
    }, []);

    const placeOrder = (data) => {
       const createOrderData = {
         products: cartData,
         transaction_id: "123",
         amount: total,
         address: data.address+','+data.city+','+data.country+' '+data.pinCode,
         user : data
     };
     createOrder(userId, token, createOrderData)
         .then(response => {
            if(response.error){
               alert("something is wrong")
            }else{
               alert("Your order place successfully")
               setCartItem([]);
               history.push('/');
            }
         })
    }

return (
   <Layout
      title=""
      description=""
      className="container-fluid"
   >
      <div className="bz_inner_page_navigation float_left">
         <div className="container custom_container">
            <div className="inner_menu float_left">
               <ul>
                  <li><a href="#"> <span><i className="fas fa-home"></i></span> </a></li>
                  <li className="active"><a href="#"> <span><i className="fas fa-angle-right"></i></span> Checkout</a></li>
               </ul>
            </div>collapse
         </div>
      </div>
      <div className="bz_product_grid_content_main_wrapper float_left">
         <div className="container custom_container">
            <div className="row">
               <div className="col-lg-8 col-md-12 col-12">
               <form onSubmit={handleSubmit(placeOrder)}>
                  <div className="bz_checkout_main_wrapper float_left">
                     <div className="accordion" id="accordionExample">
                        <div className="card checkout_accord">
                           <div className="card-header" id="headingTwo">
                              <h2 className="mb-0">
                                 <button type="button" className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo">Order Information <span><i className="fa fa-minus"></i></span> </button>
                              </h2>
                           </div>
                           <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                              <div className="card-body">
                                 <div className="billing_info float_left">
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
                                       {cartData.map((product, i) => (
                                          <tr key={i}>
                                             <td>
                                             <Link to="#" onClick={removeCartItem(product.id)}>
                                                x
                                             </Link>{" "}
                                             <img
                                                className="img-fluid"
                                                src={product.image}
                                                alt={product.name}
                                             />
                                             </td>
                                             <td>{product.name}</td>
                                             <td>
                                             <div className="number_pluse">
                                                <div className="nice-number">
                                                   <button
                                                   type="button"
                                                   onClick={quantityDecrement(product.id)}
                                                   >
                                                   -
                                                   </button>
                                                   <input type="number" defaultValue={product.quantity} />
                                                   <button
                                                   type="button"
                                                   onClick={quantityIncrement(product.id)}
                                                   >
                                                   +
                                                   </button>
                                                </div>
                                             </div>
                                             </td>
                                             <td>
                                             <i className="fas fa-rupee-sign fa-sm"></i>
                                             {product.price} x {product.quantity}
                                             </td>
                                             <td>
                                             <i className="fas fa-rupee-sign fa-sm"></i>
                                             {product.price * product.quantity}
                                             </td>
                                          </tr>
                                       ))}
                                       </tbody>
                                    </table>
                                    </div>
                                    <Link className="submit_btn" to="#">Continue</Link>
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
                                 {/* <form onSubmit={handleSubmit(clickSubmit)}> */}
                                    <div className="billing_info float_left">
                                       <div className="form-group row">
                                          <div className="col-md-6 col-12">
                                             <label>First Name<span className='error'>*</span></label>
                                             <input type="text" className="form-control" defaultValue={user.firstName}  {...register("firstName", {required: true})}  placeholder="Enter here"/>
                                             {errors.firstName && <span className='error'>First name is required</span>}
                                          </div>
                                          <div className="col-md-6 col-12">
                                             <label>Last Name<span className='error'>*</span></label>
                                             <input type="text" className="form-control" defaultValue={user.lastName}  {...register("lastName", {required: true})} placeholder="Enter here"/>
                                             {errors.lastName && <span className='error'>Last name is required</span>}
                                          </div>
                                       </div>
                                       <div className="form-group row">
                                          <div className="col-md-6 col-12">
                                             <label>Email<span className='error'>*</span></label>
                                             <input type="text" className="form-control"   {...register("email", { required: "Email id is required " , pattern:  {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,  message : "invalid email address"} } )} placeholder="Enter here"/>
                                             {errors.email && <span className='error'>{errors.email.message}</span>}
                                          </div>
                                          <div className="col-md-6 col-12">
                                             <label>Phone No.<span className='error'>*</span></label>
                                             <input type="text" className="form-control" defaultValue={user.mobileNo_} {...register("mobileNo")} placeholder="Enter here" readOnly={true} />
                                          </div>
                                       </div>
                                       <div className="form-group row">
                                          <div className="col-md-6 col-12">
                                             <label>Select your Country<span className='error'>*</span></label>
                                             <input type="text" className="form-control" {...register("country", {required: true})} placeholder="Enter here"/>
                                             {errors.country && <span className='error'>Country is required</span>}
                                          </div>
                                          <div className="col-md-6 col-12">
                                             <label>City<span className='error'>*</span></label>
                                             <input type="text" className="form-control" {...register("city", {required:true})} placeholder="Enter here"/>
                                             {errors.city && <span className='error'>City is required</span>}
                                          </div>
                                       </div>
                                       <div className="form-group row">
                                          <div className="col-md-6 col-12">
                                             <label>State<span className='error'>*</span></label>
                                             <input type="text" className="form-control" {...register("state" , {required: true})} placeholder="Enter here"/>
                                             {errors.state && <span className='error'>State is required</span>}
                                          </div>
                                          <div className="col-md-6 col-12">
                                             <label>Pin Code<span className='error'>*</span></label>
                                             <input type="text" className="form-control" {...register("pinCode" , { required : "Pin code is required" , pattern: {value : /^(0|[1-9]\d*)(\.\d+)?$/ ,message : "Invalide Pin Code" }})} placeholder="Enter here"/>
                                             {errors.pinCode && <span className='error'>{errors.pinCode.message}</span>}
                                          </div>
                                       </div>
                                       <div className="form-group row">
                                          <div className="col-md-12 col-12">
                                             <label>Address<span className='error'>*</span></label>
                                             <textarea className="form-control" rows="4" {...register("address" ,{ required: true}) }></textarea>
                                             {errors.address && <span className='error'>Address is required</span>}
                                          </div>
                                       </div>
                                       <button  className="submit_btn" >Continue</button>
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
                                    {/* <form> */}
                                       <p>
                                          <input type="radio" id="test3" value="1"  name="paymentType" {...register("paymentType")} defaultChecked="checked" readOnly={true}/>
                                          <label className="direct_bank" htmlFor="test3">Direct Bank Transfer
                                          <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                                          </label>
                                       </p>
                                       <p>
                                          <input type="radio" id="test4" value="2" name="paymentType" {...register("paymentType")} readOnly={true}/>
                                          <label htmlFor="test4">Cheque Payments
                                          <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                                          </label>
                                       </p>
                                       <p>
                                          <input type="radio" id="test5" value="3" name="paymentType" {...register("paymentType")} checked={true}/>
                                          <label htmlFor="test5">Cash On Delivery
                                          <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                                          </label>
                                       </p>
                                       <p>
                                          <input type="radio" id="test6" value="4" name="paymentType" {...register("paymentType")} defaultChecked="cashOnDeliver" readOnly={true} />
                                          <label htmlFor="test6">Pay Pal</label>
                                       </p>
                                    {/* </form> */}
                                    <div className="payment_card">
                                       <img className="img-fluid" src="../assets/images/payment_card.png" alt="card"/>
                                       <button type="submit" className="submit_btn" >Place Order</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                   </div>
                  </form>
               </div>
               <YourOrder total={total} placeOrder={placeOrder}/>
            </div>
         </div>
      </div>
   </Layout>
    );
};

export default Checkout;
