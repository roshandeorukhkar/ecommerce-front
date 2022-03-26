import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import ShowImage from "./ShowImage";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const [reload ,setReload] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
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
  }, [props,reload]);
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
                  Electronic
                </Link>
              </li>
            </ul>
          </div>
          <div className="shoping_box float_left">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="container pt-4 pb-5 small_slider verticle_slider">
                  <div className="row carousel-indicators">
                    <div className="item">
                    <ShowImage
                          item={product}
                          url="product"
                          className="d-block w-100"
                        />
                    </div>
                    <div className="item">
                    <ShowImage
                          item={product}
                          url="product"
                          className="d-block w-100"
                        />
                    </div>
                    <div className="item">
                    <ShowImage
                          item={product}
                          url="product"
                          className="d-block w-100"
                        />
                    </div>
                    <div className="item">
                    <ShowImage
                          item={product}
                          url="product"
                          className="d-block w-100"
                        />
                    </div>
                  </div>
                </div>
                <div className="sell_slider horizontal_slider">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <ShowImage
                          item={product}
                          url="product"
                          className="d-block w-100"
                        />
                      </div>
                      <div className="carousel-item">
                      <ShowImage
                          item={product}
                          url="product"
                          className="d-block w-100"
                        />
                      </div>
                      <div className="carousel-item">
                      <ShowImage
                          item={product}
                          url="product"
                          className="d-block w-100"
                        />
                      </div>
                      <div className="carousel-item">
                      <ShowImage
                          item={product}
                          url="product"
                          className="d-block w-100"
                        />
                      </div>
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
                    <Link to="#">Add To Wishlist</Link>
                    <Link className="black_btn" to="/cart">
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
                    <h3>
                      <i className="fas fa-rupee-sign fa-sm"></i>
                      {product.price}{" "}
                      <span>
                        <del>
                          <i className="fas fa-rupee-sign fa-sm"></i>379.00
                        </del>
                      </span>{" "}
                    </h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Vestibulum tortor quam,
                      feugiat vitae, ultricies eget, tempor sit amet, ante.
                      Donec eu libero sit amet quam egestas semper. Aenean
                      ultricies mi vitae est. Mauris placerat eleifend leo.
                    </p>
                  </div>
                  <div className="color_code float_left">
                    <div className="fashion_color">
                      <label>Color :</label>
                      <ul className="color_change">
                        <li className="black-co">
                          <Link to="#"></Link>
                        </li>
                        <li className="grey-co">
                          <Link to="#"></Link>
                        </li>
                        <li className="pink-co">
                          <Link to="#"></Link>
                        </li>
                        <li className="pink-co">
                          <Link to="#"></Link>
                        </li>
                      </ul>
                    </div>
                    <div className="fashion_category">
                      <p>
                        Categories:{" "}
                        <span>
                          <Link to="#">Electronic</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="fashion_count float_left">
                    <div className="number_pluse fashion_number">
                      <div className="nice-number">
                        <button type="button">-</button>
                        <input type="number" defaultValue="1" />
                        <button type="button">+</button>
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
                              <li>
                                {" "}
                                <span>
                                  <i className="fas fa-check"></i>
                                </span>{" "}
                                Lorem Ipsum is simply dummy text.
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <i className="fas fa-check"></i>
                                </span>{" "}
                                It is a long established fact that a reader.
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <i className="fas fa-check"></i>
                                </span>{" "}
                                There are many variations of passages of Lorem.
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <i className="fas fa-check"></i>
                                </span>{" "}
                                The standard chunk of Lorem Ipsum.
                              </li>
                              <li>
                                {" "}
                                <span>
                                  <i className="fas fa-check"></i>
                                </span>{" "}
                                Lorem Ipsum comes from sections.
                              </li>
                            </ul>
                            <div className="row">
                              <div className="col-md-4 col-12">
                                <div className="img_box">
                                  <div className="product_icon">
                                    <Link to="#">
                                      <i className="fa fa-star"></i>
                                    </Link>
                                    <p>Dedicated Service</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-12">
                                <div className="img_box">
                                  <div className="product_icon">
                                    <Link to="#">
                                      <i className="fa fa-share"></i>
                                    </Link>
                                    <p>Free Returns</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 col-12">
                                <div className="img_box">
                                  <div className="product_icon">
                                    <Link to="#">
                                      <i className="fa fa-share"></i>
                                    </Link>
                                    <p>International Shipping</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do this one eiusmod tempor incididunt ut
                              labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
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
               
            <div key={i} className="col-lg-3 col-md-6 col-12">
                <div className="product_box" style={{ width: "660%" }}>
                  <div className="img_sales">
                  {relatedProduct !== "" ? 
                  <ShowImage
                          item={res}
                          url="product"
                          className="img-fluid"
                        />
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
                      <i className="fas fa-rupee-sign fa-sm"></i>{res.price}{" "}
                      {/* <span>
                        {" "}
                        <del>
                          <i className="fas fa-rupee-sign fa-sm"></i>379.00
                        </del>{" "}
                      </span>{" "} */}
                    </h4>
                    <div className="custom_btn">
                      <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>&nbsp;&nbsp;Add
                        To Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
