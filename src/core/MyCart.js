import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { cartFetchData } from "../recoil/carts/cartHelpers";
import { isAuthenticated } from "../common/utils";
import Layout from "../core/Layout";
import UserLinks from "../core/UserLink";
import ProfileHome from "../core/ProfileHome"
import Cart from "./Cart";

const MyCart = () => {
    const {user, token} = isAuthenticated();
    const { cartData } = useRecoilValue(cartFetchData);
    const [total, setTotal] = useState(0)
    console.log("cartData===", cartData)
    return (
        <Layout
            title="Dashboard"
            description={`G'day ${user.firstName + ' ' + user.lastName}!`}
            className="container-fluid"
        >
            <ProfileHome
                profile="My Cart"
                Update="Shopping Cart"
            />

            <div className="bz_product_grid_content_main_wrapper float_left">
                <div className="container custom_container">
                    <div className="row">
                    <div className="col-3"><UserLinks/></div>
                        <div className="col-9">
                            <div className="white-box">
                                <Cart cartData={cartData} user={user} total={total}/>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>  
            
        </Layout>
    );
    
};

export default MyCart;