import React from "react"
import { Link } from "react-router-dom"
import $ from 'jquery';

$(document).ready(function(){
    // Password SHow Hide js
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {       
            $('#return-to-top').fadeIn(200);   
        } else {
            $('#return-to-top').fadeOut(200);  
        }
    });
    $('#return-to-top').click(function() {     
        $('body,html').animate({
            scrollTop : 0                
        }, 500);
    });
});    

const sendOTPLogin = () => {
    $('#sendOTP').hide();
    $('#verifyOTP').show();
};

const verifyOTPLogin = () => {
    localStorage.setItem('jwt', JSON.stringify('test'));
    window.location.reload();
};

const sendOTPRegister = () => {
    $('#sendOTPRegister').hide();
    $('#verifyOTPRegister').show();
};

const verifyOTPRegister = () => {
    localStorage.setItem('jwt', JSON.stringify('test'));
    window.location.reload();
};

const signupPopup = () => {
    $('#loginModal').hide();     
    $('#registerModal').show(); 
};

const signinPopup = () => {
    $('#loginModal').show();     
    $('#registerModal').hide(); 
};

const closeRegister = () => {
    //$('#registerModal').hide(); 
};

export default function Footer(){
    return(
        <div className="bz_bottom_footer_main_wrapper float_left">
            <Link to="#" id="return-to-top"><i className="fa fa-angle-up"></i></Link>
            <div className="container custom_container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-12">
                    <div className="footer_links-list">
                        <div className="footer_logo">
                            <h1 className="white">Logo</h1>
                            {/*<img className="img-fluid" src="../assets/images/logo.png" alt="footer-logo" />*/}
                            <p>Various versions have evolved over an the years, sometimes a accident, sometimes on purpose .</p>
                        </div>
                        <div className="information">
                            <ul>
                                <li>
                                <Link to="#"> <span><i className="fa fa-map-marker-alt"></i></span>Location - India</Link>
                                </li>
                                <li><Link to="tel:1234567890"> <span><i className="fas fa-phone"></i></span>Helpline: +123-456-7890</Link></li>
                                <li> <Link to="mailto:info@example.com" target="_top"><span><i className="fas fa-envelope"></i></span>info@example.com</Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-12">
                    <div className="footer_links-list">
                        <h3>Products</h3>
                        <ul>
                            <li><Link to="#">Prices Drop</Link></li>
                            <li><Link to="#">New Product</Link></li>
                            <li><Link to="#">Best Sales</Link></li>
                            <li><Link to="#">Hot Deals</Link></li>
                            <li><Link to="#">Stores</Link></li>
                            <li><Link to="#">Login</Link></li>
                            <li><Link to="#">My Account</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-12">
                    <div className="footer_links-list">
                        <h3>Our Company</h3>
                        <ul>
                            <li><Link to="#">Delivery</Link></li>
                            <li><Link to="#">Legal Notice</Link></li>
                            <li><Link to="#">Terms & Conditions</Link></li>
                            <li><Link to="#">About Us</Link></li>
                            <li><Link to="#">Secure Payment</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                            <li><Link to="#">Sitemap</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-2 col-md-4 col-12">
                    <div className="footer_links-list">
                        <h3>Your Account</h3>
                        <ul>
                            <li><Link to="#">Personal Information</Link></li>
                            <li><Link to="#">Orders</Link></li>
                            <li><Link to="#">Credit Slips</Link></li>
                            <li><Link to="#">Addresses</Link></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-12">
                    <div className="footer_links-list">
                        <h3>News Letter</h3>
                        <p>Wants to get latest updates! Sign up a for free. get started with store.</p>
                        <div className="social_icon">
                            <div className="footer_search">
                                <input type="text" placeholder="Your email address"/>
                                <button className="search_btn"><i className="fas fa-share"></i></button>
                            </div>
                            <ul>
                                <li>
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                                <Link to="#"><i className="fab fa-youtube"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                       
                </div>
                <div className="bz_bottom_footer_main_wrapper float_left">
                    <div className="copy_right">
                    <p> © Copyright 2021-22</p>
                    </div>
                </div> 
                {/* <div className="bz_bottom_footer_main_wrapper float_left">
                    <div className="copy_right">
                    <p> © Copyright 2021-22 - Design By Webstrot</p>
                    </div>
                </div> */}
            </div>


            <div className="modal" id="loginModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-body no-padding">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
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
                                        <p>Don't have an account? <a href="#" className="sky-blue" onClick={signupPopup}>Signup</a></p>
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
                            <button type="button" className="close" onClick={closeRegister}>&times;</button>
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
                                        <br/><br/>
                                        <p>Already have an account? <a href="#" className="sky-blue" onClick={signinPopup}>Signin</a></p>
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
            </div>

        </div>
    )
}