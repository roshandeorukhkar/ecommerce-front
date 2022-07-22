import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ProductBox from "./ProductBox";
import { partnerImgListAPI } from "../apiCore/homeApi";

const BestSellers = (props) => {
  const [productList, setProductList] = useState(props.products);
  const [partnerImages , setPartnerImages] = useState([]);

  const partnerImgLists = () => {
    partnerImgListAPI().then((data) =>{
      setPartnerImages(data.data.res_);
    })
  }
   
  useEffect(() => {
    setProductList(props.products);
    partnerImgLists();
  }, [props]);

  const state_1 = {
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const state_2 = {
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

  return (
    <div className="upperPadding">
      <div className="bz_section_washing_main_wrapper float_left">
        <div className="container custom_container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="bz_pos_main_wrapper float_left">
                <div className="bz_pos_list_wrapper float_left">
                  <ul>
                    <li>
                      <div className="icon_post">
                        <img src="../assets/images/icon1.png" alt="icon" />
                      </div>
                      <div className="icon_list">
                        <a href="#">
                          Special Gift Cardst <span>Special Gift cards</span>{" "}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon_post">
                        <img src="../assets/images/icon2.png" alt="icon" />
                      </div>
                      <div className="icon_list">
                        <a href="#">
                          Secure Payment <span>100% Secure Payment</span>{" "}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon_post">
                        <img src="../assets/images/icon3.png" alt="icon" />
                      </div>
                      <div className="icon_list">
                        <a href="#">
                          24/7 <span>Support</span>{" "}
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="icon_post">
                        <img src="../assets/images/icon4.png" alt="icon" />
                      </div>
                      <div className="icon_list">
                        <a href="#">
                          Free Shipping{" "}
                          <span>
                            on order over{" "}
                            <i className="fas fa-rupee-sign fa-sm"></i>99
                          </span>{" "}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bz_post_add_wrapper">
                  <img
                    className="img-fluid"
                    src="../assets/images/product.jpg"
                    alt="addpost"
                    style={{ height: "245px" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-6 col-12">
              <div className="new_product_tabs">
                <div className="justify-content-end">
                  <h3 className="title">
                    {" "}
                    <span>
                      {" "}
                      <img src="../assets/images/washing_icon.png" alt="icon" />
                    </span>{" "}
                    New Product
                  </h3>
                </div>
                <div className="tab-content">
                  <div
                    id="all"
                    className="tab-pane active show"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <div className="washing_slider">
                      <OwlCarousel
                        className="owl-carousel owl-theme"
                        loop
                        nav={true}
                        dot={"false"}
                        margin={10}
                        responsive={state_1.responsive}
                      >
                        {productList != ""
                          ? productList.map((ele , i) => (
                            !ele.deletedAt ? 
                           <div
                                key={i}
                                className="item"
                                style={{ width: "99%" }}
                              >
                           <ProductBox 
                            image={ele.images}
                            productId={ele._id}
                            name={ele.name}
                            price={ele.price}
                            category={ele.category.name}
                            product={ele}
                            keyID={i} 
                            />
                            </div> : null
                            ))
                          : null}
                      </OwlCarousel>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bz_section_partner_main_wrapper float_left">
        <div className="container custom_container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="our_partner_heading">
                <h3 className="title">
                  <span>
                    <img
                      className="img-fluid"
                      src="../assets/images/partner.png"
                      alt="icon"
                    />
                  </span>{" "}
                  &nbsp;Our Partner
                </h3>
              </div>
              <div className="partner_slider">
                <OwlCarousel
                  className="owl-carousel owl-theme"
                  loop
                  margin={10}
                  nav
                  responsive={state_2.responsive}
                  dots={false}
                  autoplay={true}
                >
                  {partnerImages.length != 0 ?
                  partnerImages.map((res , i) =>(
                    <div className="item" key={i}>
                    <div className="partner_img">
                      <img src={res.image} alt="logo" height={150} width={80}/>
                    </div>
                  </div>
                  )) : <div className="item">
                    <div className="partner_img">
                      <img src="../assets/images/team_6.jpg" alt="logo" />
                    </div>
                  </div>
                  }
                 
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSellers;
