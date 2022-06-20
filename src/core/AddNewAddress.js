import React, { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addAddress} from "../customer/apiUser";
import { useRecoilState } from "recoil";
import { setManageAddress } from "../recoil/atom/setManageAddress";

const AddNewAddress = (props) => {
    const [ address , setAddress]= useState([])
    const [ coilAddress , setCoilAddress ] = useRecoilState(setManageAddress)
    const handleChange = data => event => {
        setAddress({ ...address,[data]: event.target.value });
    };
    const {handleSubmit, register, formState : {errors} } = useForm();

    const onSubmit = (data) => {
        const addressData ={
            customerId:props.customer,
            fname   :data.fname,
            lname   :data.lname,
            city    :data.city,
            email   :data.email,
            mobile  :data.mobile,
            country :data.country,
            address :data.address,
            state   :data.state,
            pincode :data.pincode
        }
        addAddress(addressData).then(res => {
            setCoilAddress(coilAddress.concat(res))        
            props.recordAdded()
        });
    }  

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-lg-12 order-address">
                <div className="row">
                    <div className="form-group col-lg-6">
                        <label>First Name<span className='error'>*</span></label>
                        <input onChange={handleChange('fname')} name="fname" {...register("fname", {required: true})} className="form-control" value={address.fname}/>
                        {errors.fname && <span className='error'>First Name is required</span>}
                    </div>

                    <div className="form-group col-lg-6">
                        <label>Last Name<span className='error'>*</span></label>
                        <input onChange={handleChange('lname')} name="lname" {...register("lname", {required: true})} className="form-control" value={address.lname}/>
                        {errors.lname && <span className='error'>Last Name is required</span>}
                    </div>

                    <div className="form-group col-lg-6">
                        <label>Email<span className='error'>*</span></label>
                        <input type="email" onChange={handleChange('email')} name="email" {...register("email", {required: true})} className="form-control" value={address.email}/>
                        {errors.email && <span className='error'>Email is required</span>}
                    </div>
                    
                    <div className="form-group col-lg-6">
                        <label>Phone No.<span className='error'>*</span></label>
                        <input type="text" onChange={handleChange('mobile')} name="mobile" {...register("mobile", {required: true})} maxLength={10} className="form-control" value={address.mobile}/>
                        {errors.mobile && <span className='error'>Mobile No. is required</span>}
                    </div>

                    <div className="form-group col-lg-6">
                        <label>City<span className='error'>*</span></label>
                        <input onChange={handleChange('city')} name="city" {...register("city", {required: true})} className="form-control" value={address.city}/>
                        {errors.city && <span className='error'>City is required</span>}
                    </div>
                    
                    <div className="form-group col-lg-6">
                        <label>Country<span className='error'>*</span></label>
                        <input onChange={handleChange('country')} name="country" {...register("country", {required: true})} className="form-control" value={address.country}/>
                        {errors.country && <span className='error'>Country is required</span>}
                    </div> 

                    <div className="form-group col-lg-6">
                        <label>State<span className='error'>*</span></label>
                        <input onChange={handleChange('state')} name="state" {...register("state", {required: true})} className="form-control" value={address.state}/>
                        {errors.state && <span className='error'>State is required</span>}
                    </div>

                    <div className="form-group col-lg-6">
                        <label>Pin Code<span className='error'>*</span></label>
                        <input onChange={handleChange('pincode')} name="pincode" {...register("pincode", {required: true})} className="form-control" value={address.pincode}/>
                        {errors.pincode && <span className='error'>PinCode is required</span>}
                    </div>

                    <div className="form-group col-lg-12">
                        <label>Address<span className='error'>*</span></label>
                        <textarea onChange={handleChange('address')}  name="address" {...register("address", {required: true})} className="form-control" value={address.address}/>
                        {errors.address && <span className='error'>Address is required</span>}
                    </div>
                </div>
                <button className="submit_btn">
                    Save
                </button>

                <Link className="cancel_btn">
                    Cancle
                </Link>
            </div>
        </form>
    );
    
};

export default AddNewAddress;