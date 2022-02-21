import React, { Fragment } from "react";
import { Link ,withRouter } from "react-router-dom";
import Search from "./Search";
//import { signout, isAuthenticated } from "../auth";
import Menu from "./Menu"
import $ from 'jquery';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

$(document).ready(function(){
    $("#toggle").on("click", function(){
        var w = $('#sidebar').width();
        var pos = $('#sidebar').offset().left;
       
        if(pos == 0){
        $("#sidebar").animate({"left": -w}, "slow");
        }
        else
        {
        $("#sidebar").animate({"left": "0"}, "slow");
        }
        
      });
      
      $("#toggle_close").on("click", function(){
        var w = $('#sidebar').width();
        var pos = $('#sidebar').offset().left;
       
        if(pos == 0){
        $("#sidebar").animate({"left": -w}, "slow");
        }
        else
        {
        $("#sidebar").animate({"left": "0"}, "slow");
        }
        
      });

    $('#cssmenu li.active').addClass('open').children('ul').show();
	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});
})



export default function Header({ history }){
    //console.log(isAuthenticated())

    const iStyle = {
        background: '#edf6ff',
        borderRadius: '50%',
        padding: '10px',
    }

    return(
        <div className="pd_header_main_wrapper float_left">
            <div className="container">
                <div className="pd_top_header_wrapper">
                    {/*<div className="baz_top_header"> 
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-12">
                                <div className="left_side">
                                    <ul>
                                    <li className="res_hidden">
                                        <Link to="#"> <span><i className="fas fa-phone"></i></span>Helpline: +1234567890 </Link>
                                    </li>
                                    <li className="language">
                                        <Link to="#">Eng <i className="fas fa-angle-down"></i></Link>
                                        <div className="submenu">
                                            <Link to="#"> <span><img src="../assets/images/usa.png" alt="flag" /></span> English</Link>
                                            <Link to="#"> <span><img src="../assets/images/india.png" alt="flag" /></span> Hindi</Link>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8 col-12">
                                <div className="right_side">
                                    <Menu/>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                    <div className="middle_header float_left" style={{padding: "12px 0px 0px 0px"}}>
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <div className="logo">
                                <Link to="/"><h1 className="white">Logo</h1></Link>
                                {/*<Link to="/">
                                    <img className="img-fluid" src="../assets/images/logo.png" alt="logo" />
                                </Link>*/}
                            </div>
                        </div>
                        <div className="col-md-7 col-12">
                            <Search/>
                        </div>
                        <div className="col-md-3 col-12">
                            <div className="cart_shop f-l">
                                <Link to="#">
                                <i className="fas fa-shopping-cart fa-2x white"></i>
                                <span>Your Cart <small><i className="fas fa-rupee-sign fa-sm"></i>3590</small> </span>
                                </Link>
                                <div className="cart_details">
                                    <div className="total-count">
                                        <span>1 ITEM</span>
                                        <Link to="/cart">VIEW CART</Link>
                                    </div>
                                    <div className="cart_list">
                                        <div className="select_cart">
                                            <Link to="#">Brow Backpack</Link>
                                            <span>1 x <i className="fas fa-rupee-sign fa-sm"></i>258.00</span>
                                        </div>
                                        <div className="select_img">
                                            <img alt="" src="../assets/images/car1.jpg"/>
                                            <div className="close_btn">
                                                <i className="fa fa-times"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sub_total">
                                        <p>Sub Total:<span><i className="fas fa-rupee-sign fa-sm"></i> 289.00</span></p>
                                    </div>
                                    <div className="cart_btn">
                                        <Link to="/cart"><i className="fas fa-shopping-cart"></i>&nbsp; View Cart</Link>
                                        <Link to="/checkout"><i className="fas fa-share"></i>&nbsp; Checkout</Link>
                                    </div>
                                </div>
                            </div>
                            <Menu/>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <!-- responsive menu start--> */}
                <div id="sidebar" className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                    <div className="pd_toggle_logo">                    
                        <Link to="/"><h1 className="white" style={{background:'#000'}}>Logo</h1></Link>
                        {/*<img src="../assets/images/logo.png" alt="img"/>*/}
                    </div>
                    <div id="toggle_close">&times;</div>
                    <div id='cssmenu'>
                    <ul>
                        <li>
                            <a href="/shop"> Laptops</a>
                        </li>
                        <li>
                            <a href="/shop"> Dekstops</a>
                        </li>
                        <li className='has-sub'>
                            <a href='/shop'>Cameras</a>
                            <ul>
                                <li><Link to="/shop">Digital Camera</Link>
                                </li>
                                <li><Link to="/shop">CyberShot Camera</Link>
                                </li>
                                <li><Link to="/shop">PowerShot Camera</Link>
                                </li>
                                <li><Link to="/shop">Dual Lens Camera</Link>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/shop">Mobile</a></li>
                        <li><a href="/shop">Fashion</a></li>
                        <li><a href="/shop">Appliances</a></li>
                        <li><a href="/shop">Bike</a></li>
                    </ul>
                    <div className="share_link">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </div>
                    </div>
                </div>
            </div>
            {/* <!-- responsive menu End--> */}
            <div className="pd_navigation_wrapper" style={{ background: '#fff' }}>
                <div className="container custom_container">
                    <div className="pd_responsive_logo d-block d-sm-block d-md-block d-lg-none d-xl-none">
                    <div className="response_top_header">
                        
                    </div>
                    <div className="res_logo">
                        <Link to="/"><h1>Logo</h1></Link>
                        {/*<Link to="/">
                            <img className="img-fluid" src="../assets/images/logo.png" alt="img"/>
                            </Link>*/}
                    </div>
                    <div className="search_filter">
                        <select className="select_dropdown">
                            <option value="">All Categories</option>
                            <option value="1">Electronice</option>
                            <option value="0">Fashion</option>
                        </select>
                        <input type="text" placeholder="Search Product"/>
                        <button className="search_btn"><i className="fas fa-search"></i></button>
                    </div>
                    <div className="inner_icon">
                        <ul>
                            <li>
                                <a href="#" data-toggle="modal" data-target="#loginModal">
                                    <i className="fas fa-user fa-2x"></i>
                                </a>
                            </li>
                            <li className="cart_shop1">
                                <Link to="#">
                                <span>
                                <i className="fas fa-shopping-cart fa-2x"></i>
                                </span>
                                </Link>
                                <div className="cart_details">
                                <div className="total-count">
                                    <span>1 ITEM</span>
                                    <Link to="/cart">VIEW CART</Link>
                                </div>
                                <div className="cart_list">
                                    <div className="select_cart">
                                        <Link to="#">Brow Backpack</Link>
                                        <span>1 x <i className="fas fa-rupee-sign fa-sm"></i>258.00</span>
                                    </div>
                                    <div className="select_img">
                                        <img alt="" src="../assets/images/car1.jpg"/>
                                    </div>
                                </div>
                                <div className="sub_total">
                                    <p>Sub Total:<span><i className="fas fa-rupee-sign fa-sm"></i> 289.00</span></p>
                                </div>
                                <div className="cart_btn">
                                    <Link to="/cart"><i className="fas fa-shopping-cart"></i>&nbsp; View Cart</Link>
                                    <Link to="/checkout"><i className="fas fa-share"></i>&nbsp; Checkout</Link>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="toggle" className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                       <i className="fa fa-align-justify fa-2x"></i>
                    </div>
                    </div>
                    <div className="pd_inner_navigation_wrapper">
                    {/*<div className="baz_categories">
                        <ul>
                            <li>
                                <Link to="#">
                                Categories
                                </Link>
                                <ul className="cat_sub_menu">
                                <li className="category_a">
                                    <p>Woment Dress</p>
                                    <div className="cat_links">
                                        <Link to="#">Sheath Dresses</Link>
                                        <Link to="#">Blouson Dresses</Link>
                                        <Link to="#">Tunic Dresses</Link>
                                        <Link to="#">Pencil Dresses</Link>
                                        <Link to="#">Asymmetric Dresses</Link>
                                    </div>
                                </li>
                                <li className="category_a">
                                    <p>Men's Dress</p>
                                    <div className="cat_links">
                                        <Link to="#">Jodhpuri suit</Link>
                                        <Link to="#">Kurta</Link>
                                        <Link to="#">Sherwani</Link>
                                        <Link to="#">Jeans</Link>
                                        <Link to="#">T-Shirts</Link>
                                    </div>
                                </li>
                                <li className="category_a">
                                    <div className="dat_img">
                                        <img className="img-fluid" src="../assets/images/menu-banner.jpg" alt="" />
                                    </div>
                                </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    */}
                    
                    <ul>
                        {/*<li>
                            <Link to="/"> Home</Link>
                        </li>*/}
                        <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-laptop fa-2x" style={iStyle}></i> <br/>Laptops</Link>
                        </li>
                        <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-desktop fa-2x" style={iStyle}></i> <br/>Dekstops</Link>
                        </li>
                        <li>
                            <Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-camera-retro fa-2x" style={iStyle}></i> <br/>Cameras &nbsp;<i className="fas fa-angle-down"></i></Link>
                            <ul>
                                <li><Link to="/shop">Digital Camera</Link>
                                </li>
                                <li><Link to="/shop">CyberShot Camera</Link>
                                </li>
                                <li><Link to="/shop">PowerShot Camera</Link>
                                </li>
                                <li><Link to="/shop">Dual Lens Camera</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-mobile-alt fa-2x" style={iStyle}></i> <br/>Mobile</Link>
                        </li>
                        <li>
                            <Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-shapes fa-2x" style={iStyle}></i> <br/>Fashion &nbsp;<i className="fas fa-angle-down"></i></Link>
                            <ul>
                                <li><Link to="/shop">Trending</Link></li>
                                <li><Link to="/shop">Unique</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-box-open fa-2x" style={iStyle}></i> <br/>Appliances &nbsp;<i className="fas fa-angle-down"></i></Link>
                            <ul>
                                <li><Link to="/shop">Appliances 1</Link>
                                </li>
                                <li><Link to="/shop">Appliances 2</Link>
                                </li>
                            </ul>
                        </li>
                        <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-motorcycle fa-2x" style={iStyle}></i> <br/>Bike</Link></li>
                        <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-hotel fa-2x" style={iStyle}></i> <br/>Hotel</Link></li>
                        <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-book-open fa-2x" style={iStyle}></i> <br/>Book</Link></li>
                        <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-chair fa-2x" style={iStyle}></i> <br/>Furnitures</Link></li>
                        <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-money-check-alt fa-2x" style={iStyle}></i> <br/>Rental</Link></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}