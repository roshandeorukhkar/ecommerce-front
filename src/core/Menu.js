import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import { signout } from "../auth/Cutomer";
import { isAuthenticated } from "../common/utils"
import { itemTotal } from "./cartHelpers";
import RegistrationModal from "./RegistrationModal";
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
    // <Redirect to="/" />
};

const Menu = ({ history }) => {
    const { user, token } = isAuthenticated();
    const [showLoginModal , setShowLoginModal] = useState(false);
    const [showRegistrationModal , setShowRegistrationModal] = useState(false);

    const handleLoginModalShow = () =>{
        setShowLoginModal(true);
    }

    const handleLoginModalClose = () => {
        setShowLoginModal(false);
    }
    
    const handleRegistartionModalShow = () =>{
        setShowRegistrationModal(true)
    }
    const handleRegistartionModalClose = () =>{
        setShowRegistrationModal(false)
    }
  
    return (
        <div>
            <ul className="login f-r">

                {!isAuthenticated() && (
                    <li className="nav-item margin-t-15 f-l">
                    <Link to="#" onClick={handleLoginModalShow} >
                            Login
                    </Link>
                    {showLoginModal === true ? <Login show={showLoginModal} close={handleLoginModalClose} registrationModal={handleRegistartionModalShow} location="/user/dashboard" /> : null}
                    </li>
                )}
                {!isAuthenticated() && (
                    <li className="nav-item margin-t-15 f-l">
                        <Link to="#">/</Link>
                    </li>
                )}
                {!isAuthenticated() && (
                    <li className="nav-item margin-t-15 f-l">
                    <Link to="#" onClick={handleRegistartionModalShow} >
                         Register
                    </Link>
                        <RegistrationModal show={showRegistrationModal} close={handleRegistartionModalClose} loginModal={handleLoginModalShow}/>
                    </li>
                )}
            </ul>
            {isAuthenticated() && (
                <div className="cart_shop f-r margin-t-15">
                    <Link to="#">
                        <span>{user.firstName+" "+user.lastName} <i className="fas fa-angle-down"></i></span>
                    </Link>
                    <div className="cart_details" style={{ width: '160px' }}>
                        <ul>
                            <li><Link to="/user/dashboard">My Profile</Link></li>
                            <li><Link to="#">Wishlist</Link></li>
                            <li><Link to="#">Conatct Us</Link></li>
                            <li><Link to="#" onClick={logout}>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            )
            }
        </div>
    );

}

export default withRouter(Menu);
