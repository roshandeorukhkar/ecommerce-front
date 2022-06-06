import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './customer/Signup';
import Signin from './customer/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './user/AddCategory';
import AddProduct from './user/AddProduct';
import Shop from './core/Shop';
import Product from './core/Product';
import Cart from './core/Cart';
import UserProfile from './core/UserProfile'
import MyOrders from './core/orders';
import Profile from './customer/Profile';
import ManageProducts from './user/ManageProducts';
import UpdateProduct from './user/UpdateProduct';
import UpdateCategory from './user/updateCategory';
import AdminSignin from './user/Signin';
import AdminMain from './user/UserMain';
import Checkout from './core/Checkout';
import ManageAddress from './core/ManageAddress';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                {/* <PrivateRoute path="/user/profile" exact component={Dashboard} /> */}
                {/* <AdminRoute path="/admin" exact component={AdminMain} /> */}
                {/* <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} /> */}
                <Route path="/admin/signin" exact component={AdminSignin} />
                {/* <AdminRoute path="/admin/create/category" exact component={AddCategory} /> */}
                {/* <AdminRoute path="/admin/create/product" exact component={AddProduct} /> */}
                <Route path="/product/:productId" exact component={Product} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/user/address" exact component={ManageAddress}/>
                <Route path="/user/profile" exact component={UserProfile} />
                <Route path="/user/orders" exact component={MyOrders} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                {/* <PrivateRoute path="/admin/products" exact component={ManageProducts} /> */}
                {/* <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} /> */}
                {/* <AdminRoute path="/admin/category/update/:categoryId" exact component={UpdateCategory} /> */}
                <PrivateRoute path="/checkout" exact component={Checkout} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
