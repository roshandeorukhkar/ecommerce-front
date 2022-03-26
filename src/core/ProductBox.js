import React, { useState } from "react";
import ShowImage from "./ShowImage";
import ProductDetailsModal from "./ProductDetailsModal";
import { Link } from "react-router-dom";

const ProductBox = ({image,productId, name, category, price}) => {
  const [showProductDetailsModal , setShowProductDetailsModel] = useState(false);
  const handelModelOpen = (e) =>{
    e.preventDefault();
    setShowProductDetailsModel(true);
  }
  const handelModelClose = () => {
    setShowProductDetailsModel(false)
  }
  
  return (
      <div className="product_box">
        <div className="product_img">
          <ShowImage item={image} url="product" className="img-fluid" />
          <div className="top_icon">
            <p className="new">new</p>
            <span>
              <i className="far fa-heart"></i>
            </span>
          </div>
          <div className="product_overlay">
            <div className="search_icon">
            <Link to="#" onClick={handelModelOpen}>
                <i className="fa fa-search"></i>
           </Link>
           {
            showProductDetailsModal === true && productId != 'undefined' ? 
            <ProductDetailsModal showModel={showProductDetailsModal} close={handelModelClose} productId={productId} category={category}/> : null
           }
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
            {price}{" "}
            {/* <span>
              {" "}
              <del>
                <i className="fas fa-rupee-sign fa-sm"></i>
                500.00
              </del>{" "}
            </span>{" "} */}
          </h4>
          <a className="add_btn custom_btn" href="/cart">
            Add to Cart
          </a>
        </div>
      </div>
  );
};

export default ProductBox;
