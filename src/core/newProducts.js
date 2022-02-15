import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

function test()
{
    //$('#myModal').modal('show');
}

function NewProducts(){

    return(
                       
        <div className="upperPadding" style={{padding:'0%'}}>
            <div className="col-lg-12 col-md-12 col-12 no_padd">
                <OwlCarousel className='owl-carousel owl-theme' loop margin={10} items={1} autoplay={true}>
                    <div className='item'>
                        <img className="img-fluid" src="../assets/images/banner.png" alt="logo"/>
                    </div>
                    <div className='item'>
                        <img className="img-fluid" src="../assets/images/banner.png" alt="logo"/>
                    </div>
                    <div className='item'>
                        <img className="img-fluid" src="../assets/images/banner.png" alt="logo"/>
                    </div>
                </OwlCarousel>
            </div>
            <div className="bz_newproduct_main_wrapper float_left">
                <div className="container custom_container">
                    <div className="row1">
                        <div className="col-md-12 col-12">
                        <div className="new_product_tabs">
                            <div className="justify-content-end">
                                <h3 className="title"> <span><i className="fas fa-gift"></i></span> Featured Product</h3>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div id="home" className="tab-pane active show" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="product_slider">
                                        <OwlCarousel className='owl-carousel owl-theme' margin={10} loop nav items={4}>
                                            <div className="item" style={{width:'99%'}} onClick={test}>
                                                <div className="product_box">
                                                    <div className="product_img">
                                                    <img className="img-fluid" src="../assets/images/product1.png" alt="product img"/>
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
                                                    <span className="category-list">Headphones</span>
                                                    <a href="mobile_single_product.html">
                                                        <h3 className="woocommerce-loop-product__title">Supre Extra Base Sound.</h3>
                                                    </a>
                                                    <ul className="star">
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    </ul>
                                                    <h4>$492.00 <span> <del>$379.00</del> </span> </h4>
                                                    <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item" style={{width:'99%'}}>
                                                <div className="product_box">
                                                    <div className="product_img">
                                                    <img className="img-fluid" src="../assets/images/product1.png" alt="product img"/>
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
                                                    <span className="category-list">Earphones</span>
                                                    <a href="mobile_single_product.html">
                                                        <h3 className="woocommerce-loop-product__title">Blue, Wireles in the ear.</h3>
                                                    </a>
                                                    <ul className="star">
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    </ul>
                                                    <h4>$350.00 <span> <del>$379.00</del> </span> </h4>
                                                    <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item" style={{width:'99%'}}>
                                                <div className="product_box">
                                                    <div className="product_img">
                                                    <img className="img-fluid" src="../assets/images/product1.png" alt="product img"/>
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
                                                    <span className="category-list">Ultra HD Laptop</span>
                                                    <a href="mobile_single_product.html">
                                                        <h3 className="woocommerce-loop-product__title">4GB/TB HDD/Window 10</h3>
                                                    </a>
                                                    <ul className="star">
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    </ul>
                                                    <h4>$500.00 <span> <del>$550.00</del> </span> </h4>
                                                    <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item" style={{width:'99%'}}>
                                                <div className="product_box">
                                                    <div className="product_img">
                                                    <img className="img-fluid" src="../assets/images/product1.png" alt="product img"/>
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
                                                    <span className="category-list">HD Camera</span>
                                                    <a href="mobile_single_product.html">
                                                        <h3 className="woocommerce-loop-product__title">20.1 MP Optical Zoom</h3>
                                                    </a>
                                                    <ul className="star">
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                        <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                    </ul>
                                                    <h4>$450.00 <span> <del>$500.00</del> </span> </h4>
                                                    <a className="add_btn custom_btn" href="#">Add to Cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </OwlCarousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!-- The Modal --> */}
                <div className="modal" id="myModal">
                    <div className="modal-dialog product_modal">
                        <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-12">
                                    <div className="sell_slider">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src="../assets/images/pop_slider_img.jpeg" alt="First slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="../assets/images/pop_slider_img1.jpeg" alt="Second slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="../assets/images/pop_slider_img2.jpeg" alt="Third slide"/>
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src="../assets/images/pop_slider_img3.jpeg" alt="Third slide"/>
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                        </a>
                                        <div className="container pt-4 pb-5 small_slider">
                                            <div className="row carousel-indicators">  
                                                <div className="col-lg-12 col-md-12 col-12 no_padd">
                                                    <OwlCarousel className='owl-theme' loop margin={10} nav items={4}>
                                                        <div className='item'>
                                                        <   img src="../assets/images/pop_slider_img.jpeg" className="img-fluid" alt="img" data-target="#carouselExampleIndicators" data-slide-to="0"/>
                                                        </div>
                                                        <div className='item'>
                                                         <img src="../assets/images/pop_slider_img.jpeg" className="img-fluid" alt="img" data-target="#carouselExampleIndicators" data-slide-to="0"/>
                                                        </div>
                                                        <div className='item'>
                                                            <img src="../assets/images/pop_slider_img.jpeg" className="img-fluid" alt="img" data-target="#carouselExampleIndicators" data-slide-to="0"/>
                                                        </div>
                                                        <div className='item'>
                                                            <img src="../assets/images/pop_slider_img.jpeg" className="img-fluid" alt="img" data-target="#carouselExampleIndicators" data-slide-to="0"/>
                                                        </div>
                                                    </OwlCarousel>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-12">
                                    <div className="b_product_sell_details_wrapper float_left">
                                    <div className="bz_product_heading float_left">
                                        <h3>Boat Rockerz 450 Bluetooth Headset</h3>
                                        <ul className="review">
                                            <li>
                                                <ul className="star">
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">1 customer review</a></li>
                                            <li><a href="#">Add a review</a></li>
                                        </ul>
                                        <h3>$492.00 <span><del>$379.00</del></span> </h3>
                                        <p>Set your mind ablaze with the slick sound and expansive design that has culminated into the boAt Rockerz 450, adding luxury to your sound. Propelled by crystal clear 40mm dynamic drivers, slip into an alternate HD Immersive Audio reality. The soft cornered matte black finish allows for a comfortable fit, propagated by plush foam in an adaptive and adjustable design. Choose your mode, go wireless with Bluetooth V4.2 or connect an aux wire that cause any drain on the 300mAh Rechargeable Lithium Battery.</p>
                                    </div>
                                    <div className="color_code float_left">
                                        <label>Color :</label>
                                        <ul className="color_change">
                                            <li className="black-co"><a href="#"></a></li>
                                            <li className="grey-co"><a href="#"></a></li>
                                            <li className="pink-co"><a href="#"></a></li>
                                            <li className="pink-co"><a href="#"></a></li>
                                        </ul>
                                        <p>Categories: <span><a href="#">Electronic</a></span></p>
                                        <p>Tag: <span><a href="#">Electronic,</a> <a href="#">Mobile,</a> <a href="#">Fashion cloth</a></span></p>
                                    </div>
                                    <div className="number_pluse float_left">
                                        <input type="number" defaultValue="1"/>
                                        <a href="#" className="cart_btn">Add To Cart</a>
                                    </div>
                                    <div className="share_icon float_left">
                                        <p>Share:</p>
                                        <ul>
                                            <li>
                                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                <a href="#"><i className="fab fa-twitter"></i></a>
                                                <a href="#"><i className="fab fa-instagram"></i></a>
                                                <a href="#"><i className="fab fa-youtube"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Modal footer --> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bz_section_innerbox_main_wrapper float_left">
               <div className="container custom_container">
                  <div className="row">
                     <div className="col-lg-4 col-md-6 col-12">
                        <div className="add_post">
                           <div className="img_hover">
                              <img className="img-fluid" src="../assets/images/add4.jpg" alt="add" />
                           </div>
                           <div className="post_content color_change">
                              <p>Amazing Discount</p>
                              <h2>Men's <span>Watchs</span> </h2>
                              <a className="custom_btn" href="#">Buy Now</a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-12">
                        <div className="add_post">
                           <div className="img_hover">
                              <img className="img-fluid" src="../assets/images/add4.jpg" alt="add" />
                           </div>
                           <div className="post_content color_change">
                              <p>Amazing Discount</p>
                              <h2>Digital <span>Camera</span> </h2>
                              <a className="custom_btn" href="#">Buy Now</a>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4 col-md-6 col-12">
                        <div className="add_post">
                           <div className="img_hover">
                              <img className="img-fluid" src="../assets/images/add4.jpg" alt="add" />
                           </div>
                           <div className="post_content color_change">
                              <p>Amazing Discount</p>
                              <h2>Camera <span>Lens</span> </h2>
                              <a className="custom_btn" href="#">Buy Now</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="bz_section_style_main_wrapper float_left">
               <div className="container custom_container">
                  <div className="row">
                     <div className="col-md-5 col-12">
                        <div className="style_img">
                           <img className="img-fluid" src="../assets/images/style-img.png" alt="style"/>
                        </div>
                     </div>
                     <div className="col-md-7 col-12">
                        <div className="style_heading">
                           <h2>Sleek, Stylish &amp; Quality Powerful</h2>
                           <p>Save on innovative &amp; cutting-edge Bazooka applians that make life good.</p>
                           <a className="custom_btn" href="#">Buy now</a>
                        </div>
                        <div className="sale_bg">
                           <img className="img-fluid" src="../assets/images/sale.png" alt="sale" />
                           <div className="tag_heading">
                              <p><strong>Special</strong> sale <span>up to 50%</span> </p>
                           </div>
                        </div>
                        <div id="clockdiv" className="product_timer float_left">
                           <div className="da">
                              <span className="days wow fadeInUp">-103</span>
                              <div className="smalltext wow fadeInUp">Days</div>
                           </div>
                           <div className="ho">
                              <span className="hours wow fadeInUp">19</span>
                              <div className="smalltext wow fadeInUp">Hrs</div>
                           </div>
                           <div className="min">
                              <span className="minutes wow fadeInUp">44</span>
                              <div className="smalltext wow fadeInUp">Mins</div>
                           </div>
                           <div className="second">
                              <span className="seconds wow fadeInUp">47</span>
                              <div className="smalltext wow fadeInUp">Secs</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
    )
}
export {NewProducts}