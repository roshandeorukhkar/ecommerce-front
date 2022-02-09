import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout } from "../auth/Cutomer";
import {isAuthenticated } from "../common/utils"
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
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
        <ul>   
            <li className="nav-item">
            {!isAuthenticated() && (
                <Fragment>
                    <Link
                        // className="nav-link"
                        style={isActive(history, "/signin")}
                        to="/signin"
                    >
                        <a href="javascript:void(0);">Signin&nbsp;/</a> 
                    </Link>
                
                    <Link
                        //className="nav-link"
                        style={isActive(history, "/signup")}
                        to="/signup"
                    >
                        <a href="javascript:void(0);">&nbsp;Signup</a>
                    </Link>
                </Fragment>
            )}
            </li>                  
            {isAuthenticated() && (
                <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Signout
                    </span>
                </li>
            )}
            <li>
                <a href="#">
                    <i className="fas fa-question-circle"></i> &nbsp;Help
                </a>
            </li> 
        </ul>
    </div>
);

export default withRouter(Menu);
