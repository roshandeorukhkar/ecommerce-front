import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { addAddress} from "../customer/apiUser";

const AddNewAddress = (props) => {
    const { customerId } = useParams();
    
    const [address , setAddress]= useState({})
    console.log("address",address)

    const handleChange = data => event => {
        console.log("data",data)
        setAddress({ ...address,[data]: event.target.value });
    };

    const clickSubmit = (event) => {
        event.preventDefault();
        const addressData ={
            customerId:customerId,
            city:address.city,
            country:address.country,
            address:address.address,
            state:address.state,
            pincode:address.pincode
        }
        addAddress(addressData).then(data => {
            console.log(data)
        });
    };
    
    return (
        <div className="col-lg-12 order-address">
            <div className="row">
                <div className="form-group col-lg-6">
                    <h6><b>City</b></h6>
                    <input onChange={handleChange('city')} name="city" className="form-control" value={address.city}/>
                </div>
                
                <div className="form-group col-lg-6">
                    <h6><b> Country</b></h6>
                    <input onChange={handleChange('country')} name="country" className="form-control" value={address.country}/>
                </div> 

                <div className="form-group col-lg-6">
                    <h6><b> State</b></h6>
                    <input onChange={handleChange('state')} name="state" className="form-control" value={address.state}/>
                </div>

                <div className="form-group col-lg-6">
                    <h6><b> Pin-Code</b></h6>
                    <input onChange={handleChange('pincode')} name="pincode" className="form-control" value={address.pincode}/>
                </div>

                <div className="form-group col-lg-12">
                    <h6><b> Address</b></h6>
                    <input onChange={handleChange('address')}  name="address" className="form-control" value={address.address}/>
                </div>
                
            </div>
            <button onClick={clickSubmit} className="submit_btn">
                Submit
            </button>
        </div>
    );
    
};

export default AddNewAddress;