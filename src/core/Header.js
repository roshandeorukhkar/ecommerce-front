import React, { createContext, useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { isAuthenticated } from "../common/utils"
import Menu from "./Menu"
import {  useRecoilValue } from "recoil";
import { cartFetchData } from "../recoil/carts/cartHelpers";
import { getTopCategories } from "../apiCore/categoryApi";

export const CartContext = createContext();

export default function Header({ history }){
    const { cartData } = useRecoilValue(cartFetchData);
    const total = cartData.reduce((total, item)=>total+(item.productDetails[0].price*item.quantity),0)
    const iStyle = {
        borderRadius: '50%',
        padding: '10px',
    }
    
    // const isActive = (history, path) => {
    //     if (history.location.pathname === path) {
    //         return { color: "#ff9900" };
    //     } else {
    //         return { color: "#ffffff" };
    //     }
    // };
    
    const logout = () => {
        localStorage.removeItem('jwt');
        window.location.reload();
    };

    const [categories_list_top, setCategories_list_top] = useState([])
    useEffect(() => {
        async function fetchData() {
          const response = await getTopCategories();
          setCategories_list_top(response.data)
        }
        fetchData();
    }, []);
   
   
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
                            <div className="col-md-3 col-12" style={{padding: '0px' }}>
                                <div className="cart_shop f-l">
                                    <Link to="/mycart">
                                    <i className="fas fa-shopping-cart fa-2x white"></i>
                                    <span className="cart-count" style={{display: 'inline', background : "red" , padding : "0px 2px" }}> {cartData.length} </span>  
                                    <span>Your Cart <small><i className="fas fa-rupee-sign fa-sm"></i>{total}</small> </span>
                                    </Link>
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
                        <div className="response_top_header"></div>
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
                                        <Link to="/mycart">VIEW CART</Link>
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
                                        <Link to="/mycart"><i className="fas fa-shopping-cart"></i>&nbsp; View Cart</Link>
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
                                                <li><Link to="">My Profile</Link></li>
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
                            {
                            categories_list_top.map(function(item, i){
                                return <li><Link to="/shop" style={{ textAlign: 'center' }}><i className="fas fa-laptop fa-2x" style={iStyle}></i> <br/>{item.name}</Link>
                                </li>
                            })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}