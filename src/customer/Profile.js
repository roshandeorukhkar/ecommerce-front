import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../common/utils';
import { Link, Redirect } from 'react-router-dom';
import { read, update, updateUser } from './apiUser';

const Profile = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        lastName:'',
        gender:'',
        email: '',
        error: false,
        success: false
    });

    const { token } = isAuthenticated();
    const { name,lastName,gender, email, error, success } = values;

    const init = userId => {
        // console.log(userId);
        //, email: data.email, email: data.mobile
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                console.log(data);
                console.log(data.lastName)
                setValues({ ...values, name: data.firstName,lastName:data.lastName,gender:data.gender, email: data.email });
            }
        });
    };

    useEffect(() => {
        init(match.params.userId);
    }, []);

    const handleChange = name => e => {
        console.log(name)
        if(name=='gender') {
            setValues({ ...values, error: false, [name]: e.target.value });
        }
        else {
        setValues({ ...values, error: false, [name]: e.target.value });
        }
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, { name,lastName,gender, email }).then(data => {
            if (data.error) {
                console.log(gender)
                // console.log(data.error);
               // alert(data.error);
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        name: data.name,
                        lastName:data.lastName,
                        gender:data.gender,
                        email: data.email,
                        success: true
                    });
                });
            }
        });
    };

    const redirectUser = success => {
        if (success) {
            return <Redirect to="/cart" />;
        }
    };

    const profileUpdate = (name,lastName,gender, email) => (
        <form>
            <div className="form-group">
                <label className="text-muted">First Name</label>
                <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
            </div>
            <div className="form-group">
                <label className="text-muted">Last Name</label>
                <input type="text" onChange={handleChange('lastName')} className="form-control" value={lastName} />
            </div>
            <div className="form-group">
                <label className="text-muted">gender</label>
                <span class="form-control">
                <input onChange={handleChange('gender')} name="gender" type="radio" className="" value="M" style={{width: '32px', height:'30px'}} /> Male
                <input onChange={handleChange('gender')} name="gender" type="radio" className="" value="F" style={{width: '32px', height:'30px'}} /> Female
                </span>
            </div>

           
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
            </div>
            {/* <div className="form-group">
                <label className="text-muted">Mobile</label>
                <input type="text" onChange={handleChange('mobile')} className="form-control" value={mobile} />
            </div> */}

            <button onClick={clickSubmit} className="btn btn-primary">
                Submit
            </button>
        </form>
    );

    return (
        <Layout title="Profile" description="Update your profile" className="container-fluid">
            
            <div className="bz_inner_page_navigation float_left">
                <div className="container custom_container">
                <div className="inner_menu float_left">
                    <ul>
                    <li>
                        <a href="#">
                        {" "}
                        <span>
                            <i className="fas fa-home"></i>
                        </span>{" "}
                        </a>
                    </li>
                    <li>
                        <a href="/user/dashboard">
                        {" "}
                        <span>
                            <i className="fas fa-angle-right"></i>
                        </span>{" "}
                        My Profile
                        </a>
                    </li>
                    <li className="active">
                        <a href="#">
                        {" "}
                        <span>
                            <i className="fas fa-angle-right"></i>
                        </span>{" "}
                        Profile Update
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>

            <div className="bz_product_grid_content_main_wrapper float_left">
                <div className="container custom_container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="mb-4">Personal Information</h2>    
                            {profileUpdate(name,lastName,gender, email)}
                            {redirectUser(success)}
                        </div>
                    </div>
                </div>
            </div>  

        </Layout>
    );
};

export default Profile;
