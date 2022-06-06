import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../common/utils";
import Layout from "../core/Layout";
import UserLinks from "../core/UserLink";
import ProfileHome from "../core/ProfileHome";
import { read } from "../customer/apiUser"
const ManageAddress = () => {
    const {
        user : { _id, firstName, lastName, mobileNo_, email, address, city, country, pincode, state,  role }
    } = isAuthenticated();

    const [userInfo ,setUserInfo] = useState({})
    const { user, token } = isAuthenticated();

    const listOfUserInfo = () => {
        read(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setUserInfo(data);
            }
        });
    };

    useEffect(() => {
        listOfUserInfo()
    }, []);
    
    return (
        <Layout
            title="Dashboard"
            description={`G'day ${firstName+' '+lastName}!`}
            className="container-fluid"
        >
            <ProfileHome/>

            <div className="bz_product_grid_content_main_wrapper float_left">
                <div className="container custom_container">
                    <div className="row">
                    <div className="col-3"><UserLinks/></div>
                        <div className="col-9">
                            <form>
                                <div className="white-box">
                                    <h3>Manage Address</h3>
                                    <div className="border-bottom"></div>
                                    <div className="row">
                                        <div className="order-address">
                                            <div className="order-addressInfo">
                                                <h4>Default</h4>
                                                <ul>
                                                    <li>{userInfo.address}</li>
                                                    <li>{userInfo.city}</li>
                                                    <li>{userInfo.country}</li>
                                                    <li>{userInfo.state}</li>
                                                    <li>{userInfo.pincode}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
            
        </Layout>
    );
    
};

export default ManageAddress;