import React, { Fragment } from "react";
import { Link ,withRouter } from "react-router-dom";
import Search from "./Search";
//import { signout, isAuthenticated } from "../auth";
import {isAuthenticated } from "../common/utils"
import Menu from "./Menu"
import $ from 'jquery';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const logout = () => {
    localStorage.removeItem('jwt');
    window.location.reload();
    //alert('Register Successfully');
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
		$(this).removeAttr('to');
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
                   <div className="middle_header float_left" style={{padding: "12px 0px 0px 0px"}}>
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <div className="logo">
                                <Link to="/"><h1 className="white">Logo</h1></Link>
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
                            <Link to="/shop"> Laptops</Link>
                        </li>
                        <li>
                            <Link to="/shop"> Dekstops</Link>
                        </li>
                        <li className='has-sub'>
                            <Link to='/shop'>Cameras</Link>
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
                        <li><Link to="/shop">Mobile</Link></li>
                        <li><Link to="/shop">Fashion</Link></li>
                        <li><Link to="/shop">Appliances</Link></li>
                        <li><Link to="/shop">Bike</Link></li>
                    </ul>
                    <div className="share_link">
                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
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
                            {!isAuthenticated() && (   
                                <li>
                                    <Link to="#" data-toggle="modal" data-target="#loginModal">
                                        <i className="fas fa-user fa-2x"></i>
                                    </Link>
                                </li> 
                            )}
                            {isAuthenticated() && (
                                <li className="cart_shop1" style={{display: 'inline-block'}}>
                                    <Link to="#">
                                        <i className="fas fa-user fa-2x"></i> <i class="fas fa-angle-down fa-2x"></i>
                                    </Link>
                                    <div className="cart_details device" style={{width: '120px'}}>
                                        <ul style={{display: 'block'}}>
                                            <li><Link to="#">My Profile</Link></li>
                                            <li><Link to="#">Wishlist</Link></li>
                                            <li><Link to="#">Conatct Us</Link></li>
                                            <li><Link to="#" onClick={logout}>Logout</Link></li>
                                        </ul>
                                    </div>
                                </li>  
                            )}                         
                        </ul>
                    </div>
                    <div id="toggle" className="d-block d-sm-block d-md-block d-lg-none d-xl-none">
                       <i className="fa fa-align-justify fa-2x"></i>
                    </div>
                    </div>
                    <div className="pd_inner_navigation_wrapper">
                    <ul>
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