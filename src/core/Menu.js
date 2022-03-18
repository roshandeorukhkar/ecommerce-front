import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { signout } from "../auth/Cutomer";
import { isAuthenticated } from "../common/utils"
import { itemTotal } from "./cartHelpers";
import $ from 'jquery';
import RegistrationModel from "./RegistrationModel";
import Login from "./Login";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};


const logout = () => {
    
    localStorage.removeItem('jwt');
    <Redirect to="/" />
};

const Menu = ({ history }) => {
    const [userName , setUserName] = useState('');

    // console.log(user._id, "userid...........")
   
    const userLogin = () =>{
        var user =  localStorage.getItem("jwt");
        if(user){
            const userData = JSON.parse(user);
            const name = userData.user.firstName+ ' ' + userData.user.lastName;
            console.log(name,"name");
            setUserName(name);
        }
    }
      
    const handleClose = () =>{
        console.log("close");
    }
  
    return (
        <div>
            <ul className="login f-r">

                {!isAuthenticated() && (
                    <li className="nav-item margin-t-15 f-l">
                    <Login newClassName="" assignName="Login" close={handleClose} />
                    </li>
                )}
                {!isAuthenticated() && (
                    <li className="nav-item margin-t-15 f-l">
                        <Link to="#">/</Link>
                    </li>
                )}
                {!isAuthenticated() && (
                    <li className="nav-item margin-t-15 f-l">
                        <RegistrationModel newClassName="" assignName="Register"/>
                    </li>
                )}
            </ul>
            {isAuthenticated() && (
                <div className="cart_shop f-r margin-t-15">
                    <Link to="#">
                        <span>{userName? userName : "User Name"} <i className="fas fa-angle-down"></i></span>
                    </Link>
                    <div className="cart_details" style={{ width: '160px' }}>
                        <ul>
                            <li><Link to="#">My Profile</Link></li>
                            <li><Link to="#">Wishlist</Link></li>
                            <li><Link to="#">Conatct Us</Link></li>
                            <li><Link to="#" onClick={logout}>Logout</Link></li>
                        </ul>
                    </div>
                {userLogin}
                </div>
            )
            }
        </div>
    );

}

export default withRouter(Menu);
