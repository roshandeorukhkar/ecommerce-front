import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartList } from "../recoil/carts/cartHelpers";
import { addProdcutToWishlist } from "../apiCore/wishlistApi";
import { createCart }  from "../apiCore/cartApi";
import { isAuthenticated } from '../common/utils';
import RegistrationModal from "./RegistrationModal";
import Login from "./Login";
import { useRecoilValue } from "recoil";
import { cartFetchData } from "../recoil/carts/cartHelpers";

const ProductBox = ({ image, productId, name, category, price, product}) => {
  const [cartItem, setCartItem] = useRecoilState(cartList);
  const [quantity, setQuantity] = useState(1);
  const { cartData, total } = useRecoilValue(cartFetchData);
  console.log("quantity-------",quantity)
  const history = useHistory();
  let discount_ = 0;
  if( product.discount != 0 && product.discount != "" ){
    discount_ = price - (price * product.discount / 100 ) 
  }

  const { user ,token } = isAuthenticated();
  const userId = (user !== undefined) ?  user._id:'0';

  const [showLoginModal , setShowLoginModal] = useState(false);
  const [showRegistrationModal , setShowRegistrationModal] = useState(false);

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

  const addToCart = (e) => {
    console.log(" productid---",productId, cartData)
    e.preventDefault();
    const check_index = cartData.findIndex(item => item.product === productId);
    console.log("check_index-------", check_index )
    if (check_index !== -1) {
      //console.log("check_index-------", cartData[check_index], cartData[check_index].quantity )
      //cartData[check_index].quantity ++;
      //console.log("Quantity updated:", cartData);

      setCartItem((cartItem) =>
        console.log("cartItem-----",cartItem),
        cartItem.map((item) =>
            item.product === productId ? { ...item, quantity : item.quantity + 1 } : item,
          )
        );

    } else {
      const cartItemData = {
        //...cartData.productDetails[0].find(p => p.productId === productId),
        product: productId,
        quantity: 1 ,
        user: userId,
      }
      setCartItem((oldCartItem) => [
        ...oldCartItem,
        cartItemData
      ]);
      console.log("cartItemData:---", cartItemData);
      createCart(cartItemData).then(res => {
        console.log(res)
        setCartItem(res.data)
      });
    }
   // history.push("/mycart");
  };

  const addToWishlist = productId =>(e) =>{
    e.preventDefault();
    const productData = {
      product : productId,
      user: userId
    };
    addProdcutToWishlist(userId,token,productData).then(data => {
      if (data.status == false) {
        alert('Error occured while adding product into your wishlist, Please try again.')
      } 
      else 
      {
        alert('Product has been added successfully into your wishlist.')
        history.push('/');
      }
    });
    //history.push('/user/wishlist');
  }

  return (
    <div className="product_box">
      <div className="product_img">
        {image && Object.values(image).map((res, i) =>
          i == 0 ? (
            <img
              key={i}
              src={res[0]}
              className="img-fluid"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              alt={name}
            />
          ) : null
        )}

        {userId=='0' ? 
          <div className="top_icon" onClick={handleLoginModalShow}>
            <p className="new">new</p>
            <span>
              <i className="far fa-heart"></i>
            </span>
          </div>
          :
          <div className="top_icon" onClick={addToWishlist(productId)}>
            <p className="new">new</p>
            <span>
              <i className="far fa-heart"></i>
            </span>
          </div>
        }
        
        <div className="product_overlay">
          <div className="search_icon">
            <Link to={`/product/${productId}`}>
              <i className="fa fa-search"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="product_content">
        <span className="category-list">{category}</span>
        <Link to={`/product/${productId}`}>
          <h3 className="woocommerce-loop-product__title">{name}</h3>
        </Link>
        <ul className="star">
          <li>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-star"></i>
            </a>
          </li>
        </ul>
        <h4>
          <i className="fas fa-rupee-sign fa-sm"></i>
          {discount_ != 0 ? discount_ : price }
            <span>
              { discount_ != 0 ? <del>
                <i className="fas fa-rupee-sign fa-sm"></i>
               {price}
              </del> : null }
            </span>
        </h4>
        <Link to="" onClick={addToCart} className="add_btn custom_btn">
          Add to Cart
        </Link>
      </div>
        {showLoginModal === true ? <Login show={showLoginModal} close={handleLoginModalClose} registrationModal={handleRegistartionModalShow} location={"/"}/> : null}
        {showRegistrationModal===true? <RegistrationModal show={showRegistrationModal} close={handleRegistartionModalClose} loginModal={handleLoginModalShow}/> :null}
    </div>
  ); 
};

export default ProductBox;
