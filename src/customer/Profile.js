import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../common/utils';
import { Link, Redirect } from 'react-router-dom';
import { read, update, updateUser } from './apiUser';

const Profile = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: false,
        success: false
    });

    const { token } = isAuthenticated();
    const { name, email, password, error, success } = values;

    const init = userId => {
        // console.log(userId);
        read(userId, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: true });
            } else {
                setValues({ ...values, name: data.name, email: data.email });
            }
        });
    };

    useEffect(() => {
        init(match.params.userId);
    }, []);

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const clickSubmit = e => {
        e.preventDefault();
        update(match.params.userId, token, { name, email, password }).then(data => {
            if (data.error) {
                // console.log(data.error);
                alert(data.error);
            } else {
                updateUser(data, () => {
                    setValues({
                        ...values,
                        name: data.name,
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

    const profileUpdate = (name, email, password) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" onChange={handleChange('name')} className="form-control" value={name} />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" onChange={handleChange('email')} className="form-control" value={email} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" onChange={handleChange('password')} className="form-control" value={password} />
            </div>

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
                            {profileUpdate(name, email, password)}
                            {redirectUser(success)}
                        </div>
                    </div>
                </div>
            </div>  

        </Layout>
    );
};

export default Profile;
