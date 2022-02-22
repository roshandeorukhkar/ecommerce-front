import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout } from "../auth/Cutomer";
import {isAuthenticated } from "../common/utils"
import { itemTotal } from "./cartHelpers";
import $ from 'jquery';

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

/*
const sendOTPLogin = () => {
    $('#sendOTP').hide();
    $('#verifyOTP').show();
};

const verifyOTPLogin = () => {
    localStorage.setItem('jwt', JSON.stringify('test'));
    window.location.reload();
    //alert('login');
};

const sendOTPRegister = () => {
    $('#sendOTPRegister').hide();
    $('#verifyOTPRegister').show();
};

const verifyOTPRegister = () => {
    localStorage.setItem('jwt', JSON.stringify('test'));
    window.location.reload();
    //alert('Register Successfully');
};
*/

const logout = () => {
    localStorage.removeItem('jwt');
    window.location.reload();
    //alert('Register Successfully');
};

const Menu = ({ history }) => (
    <div>
        {/* <ul className="nav nav-tabs bg-primary"> */}
            {/* <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li> */}

            {/* <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
                </Link>
            </li> */}

            {/* <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li> */}

            {/* {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/user/dashboard")}
                        to="/user/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )}

            {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/admin/dashboard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            )} */}
        <ul className="login f-r">   
            
            {!isAuthenticated() && (
                <li className="nav-item margin-t-15 f-l">
                    <a href="#" data-toggle="modal" data-target="#loginModal">
                        Login
                    </a>
                </li>       
            )}
            {!isAuthenticated() && (
                <li className="nav-item margin-t-15 f-l">
                    <a href="#">/</a>
                </li>
            )}
            {!isAuthenticated() && (
                <li className="nav-item margin-t-15 f-l">            
                    <a href="#" data-toggle="modal" data-target="#registerModal">
                        Register
                    </a>
                </li>
            )}
            {/*    
            {isAuthenticated() && (
                <li className="nav-item margin-t-15 f-l">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Logout
                    </span>
                </li>
            )}
            */}
            {/*}
            {isAuthenticated() && (
                <li className="nav-item margin-t-15 f-l white">
                    <a herf="#" onClick={logout}>UserName <i class="fas fa-angle-down"></i></a>
                </li>
            )}*/}
            {/*<li>
                <a href="#">
                    <i className="fas fa-question-circle"></i> &nbsp;Help
                </a>
            </li>*/} 
        </ul>
        {isAuthenticated() && (   
            <div className="cart_shop f-r margin-t-15">
                <Link to="#">
                    <span>User Name <i class="fas fa-angle-down"></i></span>
                </Link>
                <div className="cart_details" style={{width:'160px'}}>
                    <ul>
                        <li><a href="#">My Profile</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Conatct Us</a></li>
                        <li><a href="#" onClick={logout}>Logout</a></li>
                    </ul>
                </div>
            </div>
        )}
        
        {/*<div className="modal" id="loginModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-body no-padding">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-12 login-popup-left">
                            <div id="sendOTP">  
                                <h4>Login With Mobile Number</h4><br/>
                                <p>Enter your mobile number we will send you OTP to verify</p><br/>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <label>Phone Number*</label>
                                    </div>
                                    <div className="col-12">
                                        <input 
                                        type="text"
                                        maxLength={10}
                                        className="form-control"
                                        placeholder="Enter here"
                                        onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                            }
                                        }}
                                        />
                                    </div>
                                </div>                      
                                <button className="submit_btn ucfirst" onClick={sendOTPLogin}>
                                    Send OTP
                                </button>
                                <br/><br/>
                                <p>Don't have an account? <a href="javascript:void(0);" className="sky-blue">Signup</a></p>
                            </div>
                            <div id="verifyOTP" style={{display:'none'}}>  
                                <h4>Login With Mobile Number</h4><br/>
                                <p>Please enter the OTP sent to your given number or change.</p><br/>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                    </div>
                                </div>                      
                                <button className="submit_btn ucfirst" onClick={verifyOTPLogin}>
                                    Verify
                                </button>
                                <br/><br/>
                                <p>Not received you code? <a href="javascript:void(0);" className="sky-blue">Resend Code</a></p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 login-popup-right">
                            <div id="sendOTPText">
                                <br/><h2 className="white">Login</h2><br/><br/>
                                <p className="login-text">Get access to your Orders, Wishlist and Recommmendations</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div className="modal" id="registerModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-body no-padding">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-12 login-popup-left">
                            <div id="sendOTPRegister">  
                                <h4>New User, Signup with your mobile number to get started</h4><br/>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <label>Phone Number*</label>
                                    </div>
                                    <div className="col-12">
                                        <input 
                                        type="text"
                                        className="form-control"
                                    placeholder="Enter here"/>
                                    </div>
                                    <div className="col-12 margin-t-15">
                                        <div className="col-6 f-l" style={{paddingLeft: '0px'}}>
                                            <label>First Name*</label>
                                            <input 
                                            type="text"
                                            className="form-control"
                                        placeholder="Enter here"/>
                                        </div>
                                        <div className="col-6 f-l" style={{paddingRight: '0px'}}>
                                            <label>Last Name*</label>
                                            <input 
                                            type="text"
                                            className="form-control"
                                        placeholder="Enter here"/>
                                        </div>
                                    </div>
                                </div>                      
                                <button className="submit_btn ucfirst" onClick={sendOTPRegister}>
                                    Send OTP
                                </button>
                            </div>
                            <div id="verifyOTPRegister" style={{display:'none'}}>  
                                <h4>Login With Mobile Number</h4><br/>
                                <p>Please enter the OTP sent to your given number or change.</p><br/>
                                <div className="form-group row">
                                    <div className="col-12">
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                        <input type="text" maxlength="1" autoComplete="new-password" className="form-control verify-otp-input"/>
                                    </div>
                                </div>                      
                                <button className="signup_btn ucfirst" onClick={verifyOTPRegister}>
                                    Signup
                                </button>
                                <br/><br/>
                                <p>Not received you code? <a href="javascript:void(0);" className="sky-blue">Resend Code</a></p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 login-popup-right">
                            <div>
                                <br/><h2 className="white">Registration</h2><br/><br/>
                                <p className="login-text">Get access to your Orders, Wishlist and Recommmendations</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>*/}
    </div>
);

export default withRouter(Menu);
