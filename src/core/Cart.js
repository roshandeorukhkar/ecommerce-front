import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCart, addItem } from "./cartHelpers";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartFetchData, cartList } from "../recoil/carts/cartHelpers";
import RegistrationModal from "./RegistrationModal";
import Login from "./Login";
import { isAuthenticated } from "../common/utils";
import YourOrder from "./YourOrder";

const Cart = () => {
  const [run, setRun] = useState(false);
  const [cartItem, setCartItem] = useRecoilState(cartList);
  const { cartData, clength, total } = useRecoilValue(cartFetchData);
  const [quantity, setQuantity] = useState(1);
  const [showLoginModal , setShowLoginModal] = useState(false);
  const [showRegistrationModal , setShowRegistrationModal] = useState(false);
  const { user ,token } = isAuthenticated();
   //login and registartion model hide/show

   const handleLoginModalShow = () =>{
      setShowLoginModal(true);
  }

  const handleLoginModalClose = () => {
      setShowLoginModal(false);
  }
  
  const handleRegistartionModalShow = () =>{
      setShowRegistrationModal(true)
  }
  const handleRegistartionModalClose = () =>{
      setShowRegistrationModal(false)
  }


  useEffect(() => {
    //  setItems(cartData);
  }, [run]);

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

  const showItems = () => {
    return (
      <div className="row">
        <div className="col-lg-8 col-md-12 col-12 bg-white">
          <div className="bz_cart_main_wrapper float_left">
            <div className="cart_tbl">
              <div className="table table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th style={{width: '10%'}}>Product</th>
                      <th></th>
                      <th>Quantity</th>
                      <th style={{width: '15%'}}>Unit Price</th>
                      <th style={{width: '15%'}}>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData.map((product, i) => (
                      <tr key={i}>
                        <td>
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
                              <input type="number" value={product.quantity} />
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
                          {product.price.toFixed(2)}
                        </td>
                        <td>
                          <i className="fas fa-rupee-sign fa-sm"></i>
                          {(product.price * product.quantity).toFixed(2)}
                        </td>
                        <td class="text-center">
                         <Link style={{fontSize: '12px', padding: '0 5px'}} to="#" title="Place Order" className="btn btn-success btn-sm">
                            Place Order
                          </Link>
                          <Link style={{fontSize: '12px', minWidth: '75px', marginTop: '5px', padding: '0 5px'}} to="#" title="Remove Item" className="btn btn-danger btn-sm" onClick={removeCartItem(product.id)}>
                            Remove
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {
          !user?
          <YourOrder total={total.toFixed(2)} placeOrder={handleLoginModalShow} location=""/> :
          <YourOrder total={total.toFixed(2)} placeOrder='' location="/checkout"  />
        }
        {showLoginModal === true ? <Login show={showLoginModal} close={handleLoginModalClose} registrationModal={handleRegistartionModalShow} location="/checkout"/> : null}
        {showRegistrationModal===true? <RegistrationModal show={showRegistrationModal} close={handleRegistartionModalClose} loginModal={handleLoginModalShow}/> :null}
        
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  return (
    <>
      {cartItem.length != 0 ? showItems() : noItemsMessage()}
    </>
  );
};

export default Cart;
