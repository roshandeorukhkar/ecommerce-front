import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartList } from "../recoil/carts/cartHelpers";

const ProductBox = ({ image, productId, name, category, price, product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartList);
  const [productImage , setProductImage] = useState(image);
  const history = useHistory();
  let discount_ = 0;
  if( product.discount != 0 && product.discount != "" ){
    discount_ = price - (price * product.discount / 100 ) 
  }

  const addToCart = (e) => {
    e.preventDefault();
    console.log("data");
    var i = 0;
    let image = "";
    Object.values(productImage).map((img)=>{
      if(i==0){
        image = img[0];
        i++;
      }
    })
    if (cartItem.some((item) => item.id === productId)) {
      setCartItem((cartItem) =>
        cartItem.map((item) =>
          item.id === productId ? { ...item, quantity : item.quantity + 1 } : item
        )
      );
    } else {
      setCartItem((oldCartItem) => [
        ...oldCartItem,
        {
          id: productId,
          name: name,
          image : image,
          description : product.description,
          category : category,
          price: discount_!= 0 ? discount_ : price,
          quantity: 1,
          isComplete: false,
        },
      ]);
    }
    history.push("/cart");
  };

  return (
    <div className="product_box">
      <div className="product_img">
        {Object.values(image).map((res, i) =>
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
        <div className="top_icon">
          <p className="new">new</p>
          <span>
            <i className="far fa-heart"></i>
          </span>
        </div>
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
          {discount_ != 0 ? discount_ : price }{" "}
          <span>
              {" "}
              { discount_ != 0 ? <del>
                <i className="fas fa-rupee-sign fa-sm"></i>
               {price}
              </del> : null }{" "}
              {" "}
            </span>{" "}
        </h4>
        <Link to="" onClick={addToCart} className="add_btn custom_btn">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default ProductBox;
