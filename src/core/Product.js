import React, { useState, useEffect } from "react";
import { isAuthenticated } from '../common/utils';
import Layout from "./Layout";
import { read, listRelated, addProdcutToWishlist } from "./apiCore";
import Card from "./Card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartList ,cartFetchData } from "../recoil/carts/cartHelpers";
import { useHistory } from "react-router-dom";
const { user ,token } = isAuthenticated();



const Product = (props) => {
  const [product, setProduct] = useState({});
  const [category,setCategory] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const [reload ,setReload] = useState(false);
  const [productImages , setProductImages] = useState({});
  const [colorProductImages , setColorProductImages] = useState([]);
  const [color , setColor] = useState([]);
  const [cartItem , setCartItem ] =  useRecoilState(cartList);
  let history = useHistory();
  const { cartData } = useRecoilValue(cartFetchData);
  const [quantity , setQuantity] = useState(1);
  const [discountPrice , setDiscountPrice] = useState();
  const [currentImage , setCurrentImage] = useState(null);
  const { user ,token } = isAuthenticated();
  const userId = (user !== undefined)?user._id:'0';

  const getQuantityOfProduct = (productId) => {
     cartData.map(item => item.id == productId ? setQuantity(item.quantity) : 1 )
  }

  const loadSingleProduct = (productId) => {
    const colorArray = [];
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        var images = JSON.parse(JSON.stringify(data.images));
        setProductImages(images);
        Object.keys(images).forEach((key,i) =>{
          colorArray.push(key);
        });
        var i = 0;
        Object.entries(images).forEach((data) =>{
          if(i == 0){
             setColorProductImages(data[1]);
            i++;
          }
        });
        setColor(colorArray);
        setCategory(data.category[0]);
        if(data.discount!='0'){
          const discountPrice_ = data.price - ( data.price * data.discount / 100 );
          setDiscountPrice(discountPrice_); 
        }
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data)
          }
        });
      }
    });
  };

  const state_3 = {
    responsive: {
      0: {
        items: 2,
      },
      450: {
        items: 2,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      },
    },
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
    setReload(true);
    getQuantityOfProduct(productId)
  }, [props,reload]);

  const addToCart = (e) =>{
    e.preventDefault();
    const productId = props.match.params.productId;
   if(cartItem.some(item => item.id === productId)){
     setCartItem(cartItem => cartItem.map(item => item.id === productId ? {...item
      // , quantity : item.quantity + 1 
    } : item ))
   }else{
     setCartItem((oldCartItem) =>[
       ...oldCartItem,
       {
         id : product._id,
         name : product.name,
         description : product.description,
         category : category.name,
         image : colorProductImages['0'],
         price : discountPrice!=''&&discountPrice!=undefined? discountPrice : product.price,
         quantity : quantity
        }
      ]);
    }
   history.push('/cart');
  }

  const addToWishlist = (e) =>{
    e.preventDefault();
    const productData = {
      product : props.match.params.productId,
      user: userId
    };
    //const productId = props.match.params.productId;
    //return false
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
    //history.push('/cart');
  }

  const addToCartSubProduct = productId => (e) =>{
   e.preventDefault();
   read(productId).then((data) => {
     console.log(data.discount)
     let discountPrice = '';
     if(data.discount != "" && data.discount!=undefined){
       discountPrice = data.price - (data.price * data.discount / 100);
     }
     var i = 0;
     let img = ''; 
     Object.values(data.images).map(res => {
       if(i == 0){
        img = res[0];
        i++;
       }
     })
      //Add to cart
     if(cartItem.some(item => item.id == data._id)){
     setCartItem(cartItem => cartItem.map(item => item.id === data._id ? {...item, quantity : item.quantity + 1 } : item ))
     }else{
     setCartItem((oldCartItem) => [
       ...oldCartItem,
       {
         id: productId,
         name: data.name,
         description: data.description,
         category: data.category.name,
         image: img,
         price: discountPrice != "" ? discountPrice : data.price,
         quantity: 1,
       },
     ]);
    }
  })
   history.push('/cart');
}


  const quantityIncrement = () => {
    const productId = props.match.params.productId;
    if(cartItem.some(item => item.id === productId && quantity >= 1)){
    setCartItem(cartItem => cartItem.map(item => item.id === productId ? {...item, quantity : item.quantity + 1 } : item ));
    setQuantity(quantity + 1)
    }else  if(quantity >= 1){
      setQuantity(quantity + 1)
    }
  }


  const quantityDecrement = () => {
    const productId = props.match.params.productId;
    if(cartItem.some(item => item.id === productId && quantity > 1)){
      setCartItem(cartItem => cartItem.map(item => item.id === productId ? {...item, quantity : item.quantity - 1 } : item ))
      setQuantity(quantity - 1)
    }else if(quantity > 1){
      setQuantity(quantity - 1 )
    }
  }
  const handelImages = (color) => (e) => {
    e.preventDefault();
    Object.entries(productImages).forEach((data,key) =>{
      if(data[0] === color){
        setColorProductImages(data[1]);
      }
    });
  }

  const handelChangeImage = (e) =>{
    setCurrentImage(e.target.src);
  }

  console.log("-----",product.attribute)

  return (
    <Layout
      title={product && product.name}
      description={
        product && product.description && product.description.substring(0, 100)
      }
      className="container-fluid"
    >
      <div className="bz_single_product_main_wrapper bz_fashion_single_product bz_cosmetic_single_product float_left">
        <div className="container custom_container">
          <div className="cosmetics_inner float_left">
            <ul>
              <li>
                <Link to="#">
                  {" "}
                  <span>
                    <i className="fas fa-home"></i>
                  </span>{" "}
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#">
                  {" "}
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>{" "}
                  Product{" "}
                </Link>
              </li>
              <li className="active">
                <Link to="#">
                  {" "}
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>{" "}
                  {category.name}
                </Link>
              </li>
            </ul>
          </div>
          <div className="shoping_box float_left">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="container pt-4 pb-5 small_slider verticle_slider">
                  <div className="row carousel-indicators">
                  {
                      colorProductImages.length != 0 ?
                      colorProductImages.map((ele , i ) => (
                        <div className="item"  key={i}>
                          <div className="product-img">
                            <img
                            src={ele}
                            alt={product.name}
                            className="d-block w-100"
                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                            onMouseEnter={handelChangeImage}
                          /> 
                          </div>
                        </div>
                      )) 
                      : null
                    }
                  </div>
                </div>
                <div className="sell_slider horizontal_slider">
                  <div
                    id="carouselExampleIndicators"
                    className={!currentImage ?"carousel slide":null}
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                    {
                      colorProductImages.length != 0 ?
                      colorProductImages.map((ele , i ) => (
                        
                        <div className={`carousel-item ${i==0 ? 'active' : ''}`} key={i}>
                          <div className="product-img" >
                          
                            <img
                            src={!currentImage?ele:currentImage}
                            alt={product.name}
                            className="d-block w-100"
                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                          /> 
                          </div>
                        </div>
                      )) 
                      : null
                    }
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a
                      className="carousel-control-next"
                      href="#carouselExampleIndicators"
                      role="button"
                      data-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                  <div className="slider_btn">
                    <Link to="#" onClick={addToWishlist} >Add To Wishlist</Link>
                    <Link className="black_btn" to="#" onClick={addToCart} >
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="b_product_sell_details_wrapper float_left">
                  <div className="bz_product_heading float_left">
                    <h3>{product.name}</h3>
                    <ul className="review">
                      <li>
                        <ul className="star">
                          <li>
                            <Link to="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fas fa-star"></i>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="#">1 customer review</Link>
                      </li>
                      <li>
                        <Link to="#">Add a review</Link>
                      </li>
                    </ul>
                    {
                      discountPrice != undefined ? 
                    <h3>
                      <i className="fas fa-rupee-sign fa-sm"></i>
                      {discountPrice}{" "}
                      <span>
                        <del>
                          <i className="fas fa-rupee-sign fa-sm"></i>{product.price}
                        </del>
                      </span>{" "}
                    </h3>
                    : <h3>
                      <i className="fas fa-rupee-sign fa-sm"></i>
                      {product.price}{" "}
                    </h3> }
                    {/* <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p> */}
                  </div>
                  <div className="color_code float_left">
                    <div className="fashion_color">
                      <label>Color :</label>
                      <ul className="color_change">
                      {
                        color.length != 0 ?
                        color.map((ele,i) => (
                          <Link onClick={handelImages(ele)} style={{padding:"3px"}}>
                          <li key={i} onClick={handelImages(ele)} style={{background: ele,  padding: "10px", borderRadius: "50%" }}>
                              {/* <Link to="#" onClick={handelImages(ele)}></Link> */}
                          </li>
                          </Link>
                        ))
                        : null
                      }
                      </ul>
                    </div>
                    <div className="fashion_category">
                      <p>
                        Categories:{" "}
                        <span>
                          <Link to="#">{category.name}</Link>
                        </span>
                      </p>
                    </div>
                    <div className="fashion_category">
                      <p>
                        Brand:{" "}
                        <span>
                          <p>{product.brand}</p>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="fashion_count float_left">
                    <div className="number_pluse fashion_number">
                      <div className="nice-number">
                        <button type="button" onClick={quantityDecrement}>-</button>
                        <input type="text" value={quantity} />
                        <button type="button" onClick={quantityIncrement}>+</button>
                      </div>
                    </div>
                    <div className="share_icon">
                      <p>Share:</p>
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link to="#">
                            <i className="fab fa-youtube"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="fashion_product_details cosmetics_product_details float_left">
                    <nav>
                      <div
                        className="nav nav-tabs nav-fill"
                        id="nav-tab"
                        role="tablist"
                      >
                        <a
                          className="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Description
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Size Guide
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-contact-tab"
                          data-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Reviews (0){" "}
                        </a>
                      </div>
                      <div
                        className="tab-content py-3 px-3 px-sm-0"
                        id="nav-tabContent"
                      >
                        <div
                          className="tab-pane fade show active"
                          id="nav-home"
                          role="tabpanel"
                          aria-labelledby="nav-home-tab"
                        >
                          <div className="content_single_product">
                            <p>{product.description}</p>
                            <ul className="nots">
                              <h3>Specification</h3>
                              {product.specification != undefined ? 
                                product.specification.map((spec , i)=>(

                              <li key={spec._id}>
                                {" "}
                                <span>
                                  <i className="fas fa-check"></i>
                                </span>{" "}
                                {spec.manufacturerName}{" : "}{spec.specification_type}
                              </li>
                                ) )
                              : null}
                            </ul>
                            
                          </div>
                          <div className="content_single_product">
                            <ul className="nots">
                              <h3>Attribute</h3>
                              {product.attribute && product.attribute.length ? 
                                product.attribute.map((att , i)=>(
                                  
                              <li>
                                {" "}
                                <span>
                                  <i className="fas fa-check"></i>
                                </span>{" "}
                                {product.attributeData[i].attributeName}{" : "}
                                 { 
                                  att.Values && att.Values.length?
                                  att.Values.map((attlabel,i) =>(
                                    attlabel.label +  ","
                                  )):null
                                } 
                              </li>
                                ) )
                              : null}
                            </ul>
                            
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-profile"
                          role="tabpanel"
                          aria-labelledby="nav-profile-tab"
                        >
                          <p>
                            Et et consectetur ipsum labore excepteur est
                            proident excepteur ad velit occaecat qui minim
                            occaecat veniam. Fugiat veniam incididunt anim
                            aliqua enim pariatur veniam sunt est aute sit dolor
                            anim. Velit non irure adipisicing aliqua ullamco
                            irure incididunt irure non esse consectetur nostrud
                            minim non minim occaecat. Amet duis do nisi duis
                            veniam non est eiusmod tempor incididunt tempor
                            dolor ipsum in qui sit. Exercitation mollit sit
                            culpa nisi culpa non adipisicing reprehenderit do
                            dolore. Duis reprehenderit occaecat anim ullamco ad
                            duis occaecat ex.
                          </p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-contact"
                          role="tabpanel"
                          aria-labelledby="nav-contact-tab"
                        >
                          <div className="content_single_product float_left">
                            <h4>
                              2 review for Ultimate 3D Bluetooth Headphone
                            </h4>
                            <div className="post_product float_left">
                              <div className="post_img">
                                <img
                                  className="img-fluid"
                                  src="../assets/images/product.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="post_details">
                                <h5>
                                  Spiritinsire <span>April 10, 2020</span>
                                </h5>
                                <ul className="star">
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star-half-alt"></i>
                                  </li>
                                  <li>
                                    <i className="far fa-star"></i>
                                  </li>
                                </ul>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable <br />
                                  content of a page when looking at its layout.
                                </p>
                              </div>
                            </div>
                            <div className="post_product float_left">
                              <div className="post_img">
                                <img
                                  className="img-fluid"
                                  src="../assets/images/product.jpg"
                                  alt="img"
                                />
                              </div>
                              <div className="post_details">
                                <h5>
                                  Spiritinsire <span>April 10, 2020</span>
                                </h5>
                                <ul className="star">
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star-half-alt"></i>
                                  </li>
                                  <li>
                                    <i className="far fa-star"></i>
                                  </li>
                                </ul>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable <br />
                                  content of a page when looking at its layout.
                                </p>
                              </div>
                            </div>
                            <div className="bz_contact_main_wrapper float_left">
                              <h4>Add a review</h4>
                              <form>
                                <h3>Your Rating* :</h3>
                                <fieldset className="rating">
                                  <input
                                    type="radio"
                                    id="star5"
                                    name="rating"
                                    value="5"
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star5"
                                    title="Awesome - 5 stars"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="star4half"
                                    name="rating"
                                    value="4 and a half"
                                  />
                                  <label
                                    className="half"
                                    htmlFor="star4half"
                                    title="Pretty good - 4.5 stars"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="star4"
                                    name="rating"
                                    value="4"
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star4"
                                    title="Pretty good - 4 stars"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="star3half"
                                    name="rating"
                                    value="3 and a half"
                                  />
                                  <label
                                    className="half"
                                    htmlFor="star3half"
                                    title="Meh - 3.5 stars"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="star3"
                                    name="rating"
                                    value="3"
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star3"
                                    title="Meh - 3 stars"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="star2half"
                                    name="rating"
                                    value="2 and a half"
                                  />
                                  <label
                                    className="half"
                                    htmlFor="star2half"
                                    title="Kinda bad - 2.5 stars"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="star2"
                                    name="rating"
                                    value="2"
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star2"
                                    title="Kinda bad - 2 stars"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="star1half"
                                    name="rating"
                                    value="1 and a half"
                                  />
                                  <label
                                    className="half"
                                    htmlFor="star1half"
                                    title="Meh - 1.5 stars"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="star1"
                                    name="rating"
                                    value="1"
                                  />
                                  <label
                                    className="full"
                                    htmlFor="star1"
                                    title="Sucks big time - 1 star"
                                  ></label>
                                  <input
                                    type="radio"
                                    id="starhalf"
                                    name="rating"
                                    value="half"
                                  />
                                  <label
                                    className="half"
                                    htmlFor="starhalf"
                                    title="Sucks big time - 0.5 stars"
                                  ></label>
                                </fieldset>
                                <div className="form-group row">
                                  <div className="col-12">
                                    <label>Your review*</label>
                                  </div>
                                  <div className="col-12">
                                    <textarea rows="5"></textarea>
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <div className="col-12">
                                    <label>Name*</label>
                                  </div>
                                  <div className="col-12">
                                    <input type="text" />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <div className="col-12">
                                    <label>Emali*</label>
                                  </div>
                                  <div className="col-12">
                                    <input type="email" />
                                  </div>
                                </div>
                                <p>
                                  Save my name, email, and website in this
                                  browser for the next time I comment.
                                </p>
                                <Link className="custom_btn" to="#">
                                  Submit
                                </Link>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bz_cosmetic_new_product_wraaper padd_bottom float_left">
        <div className="container custom_container">
          <div className="title-heading">
            <h3>
              <span
                style={{
                  borderBottom: "1px solid #01a5ed",
                  paddingBottom: "15px",
                }}
              >
                Just in now
              </span>
            </h3>
            <br />
          </div>
          <div className="row">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              items={4}
              dots={false}
            >
            {  relatedProduct.length !== '0' ?
            relatedProduct.map((res , i) => (
            res.deletedAt ?    
            <div key={i} className="col-lg-3 col-md-6 col-12">
                <div className="product_box" style={{ width: "660%" }}>
                  <div className="img_sales">
                  {relatedProduct !== "" ?
                  Object.values(res.images).map(( img , j ) =>(
                    <div className="product-img" key={j}>
                      {j === 0 ?
                        <img src={img[0]} className="img-fluid" alt="My-image" style={{maxHeight : "100%" , maxWidth: "100%"}}></img>
                        :null
                      }
                    </div>
                  )) 
                 
                        : null}
                    <div className="overlay_sales">
                      <div className="upper">
                        <Link to="#">New</Link>
                        <ul className="side_icon">
                          <li>
                            <Link to="#">
                              <i className="fas fa-search"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="far fa-heart"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <i className="fa fa-link"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="content_sales">
                    <p>
                      <Link to="#">Electronic</Link>
                    </p>
                    <Link to={`/product/${res._id}`} onClick={()=>setReload(!reload)}>
                      <h3 className="woocommerce-loop-product__title">
                        {" "}
                        {res.name}{" "}
                      </h3>
                    </Link>
                    <ul className="star">
                      <li>
                        <Link to="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fas fa-star"></i>
                        </Link>
                      </li>
                    </ul>
                    <h4>
                      <i className="fas fa-rupee-sign fa-sm"></i>
                      { res.discount!=''?  res.price- (res.price *res.discount / 100): res.price } {" "}
                      <span>
                        {" "}
                        {res.discount!='' ?
                        <del>
                          <i className="fas fa-rupee-sign fa-sm"></i>{res.price}
                        </del>
                        :null}{" "}
                      </span>{" "}
                    </h4>
                    <div className="custom_btn">
                      <Link to="#" onClick={addToCartSubProduct(res._id)} >
                        <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Add
                        To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div> : null
            )) : null
            }
            </OwlCarousel>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
