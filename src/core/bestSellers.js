import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function BestSellers(){
    return(
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
                                       <a href="#">Special Gift Cardst <span>Special Gift cards</span> </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon_post">
                                       <img src="../assets/images/icon2.png" alt="icon" />
                                    </div>
                                    <div className="icon_list">
                                       <a href="#">Secure Payment <span>100% Secure Payment</span> </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon_post">
                                       <img src="../assets/images/icon3.png" alt="icon" />
                                    </div>
                                    <div className="icon_list">
                                       <a href="#">24/7 <span>Support</span> </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div className="icon_post">
                                       <img src="../assets/images/icon4.png" alt="icon" />
                                    </div>
                                    <div className="icon_list">
                                       <a href="#">Free Shipping <span>on order over <i className="fas fa-rupee-sign fa-sm"></i>99</span> </a>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div className="bz_post_add_wrapper">
                              <img className="img-fluid" src="../assets/images/product3.png" alt="addpost" style={{height:'245px'}} />
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-9 col-md-6 col-12">
                        <div className="new_product_tabs">
                           <div className="justify-content-end">
                              <h3 className="title"> <span> <img src="../assets/images/washing_icon.png" alt="icon"/></span>  New Product</h3>
                           </div>
                           <div className="tab-content">
                              <div id="all" className="tab-pane active show" role="tabpanel" aria-labelledby="all-tab">
                                 <div className="washing_slider">
                                    <OwlCarousel className='owl-carousel owl-theme' loop nav={true} dot={'false'} margin={10} items={3}>
                                       <div className="item" style={{width:'99%'}}>
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="../assets/images/washing1.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p>hot</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Automatic Load Washing Machines </h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>492.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>379.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item" style={{width:'99%'}}>
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="../assets/images/washing1.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p className="new">new</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Number of wash programs - 2</h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>500.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>679.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item" style={{width:'99%'}}>
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="../assets/images/washing1.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p>hot</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#" data-toggle="modal" data-target="#myModal"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Semi Automatic Top Load</h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>800.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>900.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </OwlCarousel>
                                 </div>
                              </div>
                              <div id="laptop" className="tab-pane" role="tabpanel" aria-labelledby="laptop-tab">
                                 <div className="washing_slider">
                                    <div className="owl-carousel owl-theme">
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing1.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p>hot</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Automatic Load Washing Machines </h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>492.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>379.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing2.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p className="new">new</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Number of wash programs - 2</h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>500.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>679.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing3.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p>hot</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Semi Automatic Top Load</h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>800.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>900.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div id="mobile" className="tab-pane" role="tabpanel" aria-labelledby="mobile-tab">
                                 <div className="washing_slider">
                                    <div className="owl-carousel owl-theme">
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing1.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p>hot</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Automatic Load Washing Machines </h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>492.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>379.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing2.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p className="new">new</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Number of wash programs - 2</h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>500.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>679.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing3.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p>hot</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Semi Automatic Top Load</h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>800.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>900.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div id="speakers" className="tab-pane" role="tabpanel" aria-labelledby="speakers-tab">
                                 <div className="washing_slider">
                                    <div className="owl-carousel owl-theme">
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing1.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p>hot</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Automatic Load Washing Machines </h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>492.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>379.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing2.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p className="new">new</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Number of wash programs - 2</h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>500.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>679.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="product_box">
                                             <div className="product_img">
                                                <img className="img-fluid" src="images/washing3.png" alt="product img"/>
                                                <div className="top_icon">
                                                   <p>hot</p>
                                                   <span><i className="far fa-heart"></i></span>
                                                </div>
                                                <div className="product_overlay">
                                                   <div className="search_icon">
                                                      <a href="#"><i className="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div className="product_content">
                                                <span className="category-list">Washing Machine</span>
                                                <a href="/product/1">
                                                   <h3 className="woocommerce-loop-product__title">Semi Automatic Top Load</h3>
                                                </a>
                                                <ul className="star">
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4><i className="fas fa-rupee-sign fa-sm"></i>800.00 <span> <del><i className="fas fa-rupee-sign fa-sm"></i>900.00</del> </span> </h4>
                                                <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
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
                        <h3 className="title"><span><img className="img-fluid" src="../assets/images/partner.png" alt="icon"/></span> &nbsp;Our Partner</h3>
                     </div>
                     <div className="partner_slider">
                        <OwlCarousel className='owl-carousel owl-theme' loop margin={10} nav items={5} dots={false}  autoplay={true}>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div className='item'>
                              <div className="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                        </OwlCarousel>
                     </div>
                  </div>
               </div>
               </div>
            </div>
        </div>
    )
}
export {BestSellers}