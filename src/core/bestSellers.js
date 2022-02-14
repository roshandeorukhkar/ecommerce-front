import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function BestSellers(){
    return(
        <div className="upperPadding">
            <div class="bz_section_washing_main_wrapper float_left">
               <div class="container custom_container">
                  <div class="row">
                     <div class="col-lg-3 col-md-6 col-12">
                        <div class="bz_pos_main_wrapper float_left">
                           <div class="bz_pos_list_wrapper float_left">
                              <ul>
                                 <li>
                                    <div class="icon_post">
                                       <img src="../assets/images/icon1.png" alt="icon" />
                                    </div>
                                    <div class="icon_list">
                                       <a href="#">Special Gift Cardst <span>Special Gift cards</span> </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="icon_post">
                                       <img src="../assets/images/icon2.png" alt="icon" />
                                    </div>
                                    <div class="icon_list">
                                       <a href="#">Secure Payment <span>100% Secure Payment</span> </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="icon_post">
                                       <img src="../assets/images/icon3.png" alt="icon" />
                                    </div>
                                    <div class="icon_list">
                                       <a href="#">24/7 <span>Support</span> </a>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="icon_post">
                                       <img src="../assets/images/icon4.png" alt="icon" />
                                    </div>
                                    <div class="icon_list">
                                       <a href="#">Free Shipping <span>on order over $99</span> </a>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                           <div class="bz_post_add_wrapper">
                              <img class="img-fluid" src="../assets/images/product3.png" alt="addpost" style={{height:'245px'}} />
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-9 col-md-6 col-12">
                        <div class="new_product_tabs">
                           <div class="justify-content-end">
                              <h3 class="title"> <span> <img src="../assets/images/washing_icon.png" alt="icon"/></span>  New Product</h3>
                           </div>
                           <div class="tab-content">
                              <div id="all" class="tab-pane active show" role="tabpanel" aria-labelledby="all-tab">
                                 <div class="washing_slider">
                                    <OwlCarousel className='owl-carousel owl-theme' loop nav={true} dot={false} margin={10} items={3}>
                                       <div class="item" style={{width:'99%'}}>
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="../assets/images/washing1.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p>hot</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Automatic Load Washing Machines </h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$492.00 <span> <del>$379.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="item" style={{width:'99%'}}>
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="../assets/images/washing1.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p class="new">new</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Number of wash programs - 2</h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$500.00 <span> <del>$679.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="item" style={{width:'99%'}}>
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="../assets/images/washing1.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p>hot</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Semi Automatic Top Load</h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$800.00 <span> <del>$900.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </OwlCarousel>
                                 </div>
                              </div>
                              <div id="laptop" class="tab-pane" role="tabpanel" aria-labelledby="laptop-tab">
                                 <div class="washing_slider">
                                    <div class="owl-carousel owl-theme">
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing1.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p>hot</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Automatic Load Washing Machines </h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$492.00 <span> <del>$379.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing2.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p class="new">new</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Number of wash programs - 2</h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$500.00 <span> <del>$679.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing3.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p>hot</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Semi Automatic Top Load</h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$800.00 <span> <del>$900.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div id="mobile" class="tab-pane" role="tabpanel" aria-labelledby="mobile-tab">
                                 <div class="washing_slider">
                                    <div class="owl-carousel owl-theme">
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing1.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p>hot</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Automatic Load Washing Machines </h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$492.00 <span> <del>$379.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing2.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p class="new">new</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Number of wash programs - 2</h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$500.00 <span> <del>$679.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing3.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p>hot</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Semi Automatic Top Load</h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$800.00 <span> <del>$900.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div id="speakers" class="tab-pane" role="tabpanel" aria-labelledby="speakers-tab">
                                 <div class="washing_slider">
                                    <div class="owl-carousel owl-theme">
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing1.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p>hot</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Automatic Load Washing Machines </h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$492.00 <span> <del>$379.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing2.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p class="new">new</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Number of wash programs - 2</h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$500.00 <span> <del>$679.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="item">
                                          <div class="product_box">
                                             <div class="product_img">
                                                <img class="img-fluid" src="images/washing3.png" alt="product img"/>
                                                <div class="top_icon">
                                                   <p>hot</p>
                                                   <span><i class="far fa-heart"></i></span>
                                                </div>
                                                <div class="product_overlay">
                                                   <div class="search_icon">
                                                      <a href="#"><i class="fa fa-search"></i></a>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="product_content">
                                                <span class="category-list">Washing Machine</span>
                                                <a href="mobile_single_product.html">
                                                   <h3 class="woocommerce-loop-product__title">Semi Automatic Top Load</h3>
                                                </a>
                                                <ul class="star">
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                   <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                </ul>
                                                <h4>$800.00 <span> <del>$900.00</del> </span> </h4>
                                                <a class="add_btn custom_btn" href="javascript:;">Add to Cart</a>
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
            <div class="bz_section_partner_main_wrapper float_left">
               <div class="container custom_container">
               <div class="row">
                  <div class="col-md-12 col-12">
                     <div class="our_partner_heading">
                        <h3 class="title"><span><img class="img-fluid" src="../assets/images/partner.png" alt="icon"/></span> &nbsp;Our Partner</h3>
                     </div>
                     <div class="partner_slider">
                        <OwlCarousel className='owl-carousel owl-theme' loop margin={10} nav items={5} dots={false}  autoplay={true}>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
                                 <img src="../assets/images/team_6.png" alt="logo"/>
                              </div>
                           </div>
                           <div class='item'>
                              <div class="partner_img">
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