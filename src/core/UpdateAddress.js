import React, { useState, useEffect } from "react";
import { Link, useHistory  } from "react-router-dom";
import { readAllAddress, updateAddress} from "../apiCore/addressApi";
import { isAuthenticated } from "../common/utils";
import Layout from "../core/Layout";
import UserLinks from "../core/UserLink";
import ProfileHome from "../core/ProfileHome";

const UpdateAddress = ({ match }) => {
    const { params } = match
    const [address , setAddress]= useState({})
    const { user, token } = isAuthenticated();
    let history = useHistory();

    function ClickToCancle(e) {
        e.preventDefault();
    }

    const handleChange = event => {
        const { name, value } = event.target;
        setAddress({...address ,[name]:value})
    };

    useEffect(() => {
        getAddress()
    }, []);

    const getAddress = () => {
        readAllAddress(params.addressId).then(data => {
            setAddress(data.data);
        });
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        const addressData ={
            customerId:user._id,
            fname:address.fname,
            lname:address.lname,
            email:address.email,
            mobile:address.mobile,
            city:address.city,
            country:address.country,
            address:address.address,
            state:address.state,
            pincode:address.pincode
        }
        updateAddress(params.addressId, addressData).then(data => {
            setAddress(data.data)
            console.log(data)
        });
        history.push('/user/address')
    };
    
    return (
        <Layout
            title="Dashboard"
            description={` ${user.firstName + ' ' + user.lastName}!`}
            className="container-fluid"
        >
            <ProfileHome
                profile="Manage Address"
                Update="Update Address"
            />

            <div className="bz_product_grid_content_main_wrapper float_left">
                <div className="container custom_container">
                    <div className="row">
                        <div className="col-3"><UserLinks/></div>
                        <div className="col-9">
                            <form>
                                <div className="white-box">
                                    <div className="col-lg-12 order-address">
                                        <div className="row">
                                            <h3 className="col-lg-10">Update Address </h3>
                                        </div>
                                        <div className="border-bottom"></div>
                                        <div className="row">
                                            <div className="form-group col-lg-6">
                                                <label>First Name</label>
                                                <input onChange={handleChange} name="fname" className="form-control" value={address.fname}/>
                                            </div>

                                            <div className="form-group col-lg-6">
                                                <label>Last Name</label>
                                                <input onChange={handleChange} name="lname" className="form-control" value={address.lname}/>
                                            </div>

                                            <div className="form-group col-lg-6">
                                                <label>Email</label>
                                                <input onChange={handleChange} name="email" className="form-control" value={address.email}/>
                                            </div>
                                            
                                            <div className="form-group col-lg-6">
                                                <label> Mobile</label>
                                                <input onChange={handleChange} name="mobile" maxLength={10} className="form-control" value={address.mobile}/>
                                            </div>
                                            
                                            <div className="form-group col-lg-6">
                                                <label>City</label>
                                                <input onChange={handleChange} name="city" className="form-control" value={address.city}/>
                                            </div>
                                            
                                            <div className="form-group col-lg-6">
                                                <label> Country</label>
                                                <input onChange={handleChange} name="country" className="form-control" value={address.country}/>
                                            </div> 

                                            <div className="form-group col-lg-6">
                                                <label> State</label>
                                                <input onChange={handleChange} name="state" className="form-control" value={address.state}/>
                                            </div>

                                            <div className="form-group col-lg-6">
                                                <label> Pin-Code</label>
                                                <input onChange={handleChange} name="pincode" className="form-control" value={address.pincode}/>
                                            </div>

                                            <div className="form-group col-lg-12">
                                                <label> Address</label>
                                                <textarea onChange={handleChange}  name="address" className="form-control" value={address.address}/>
                                            </div>
                                        </div>
                                        <button onClick={clickSubmit} className="submit_btn">
                                            Submit
                                        </button>

                                        <Link onClick={ClickToCancle} className="cancel_btn">
                                            Cancle
                                        </Link>
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

export default UpdateAddress;