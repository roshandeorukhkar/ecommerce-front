import React, { useContext } from "react";
import { CartContext } from "./Header";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const ContextCart = () => {
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
    console.log("item==============", item)
    console.log("totalItem==============", totalItem)
    console.log("totalAmount==============", totalAmount)
  if (item.length === 0) {
    return (
        <div className="cart_shop f-l">
            <Link to="/mycart">
            <i className="fas fa-shopping-cart fa-2x white"></i>
                <span className="cart-count" style={{display: 'inline', background : "red" , padding : "0px 2px" }}> {totalItem} </span>  
            <span>Your Cart <small><i className="fas fa-rupee-sign fa-sm"></i>{totalAmount}</small> </span>
            </Link>
            <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
    );
  }

};

export default ContextCart;