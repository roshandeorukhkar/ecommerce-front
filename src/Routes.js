import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './customer/Signup';
import Signin from './customer/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoute';
import Shop from './core/Shop';
import Product from './core/Product';
import MyCart from './core/MyCart';
import UserProfile from './core/UserProfile'
import MyOrders from './core/orders';
import Profile from './customer/Profile';
import Checkout from './core/Checkout';
import ManageAddress from './core/ManageAddress';
import Wishlist from './core/Wishlist';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/product/:productId" exact component={Product} />
                <PrivateRoute path="/mycart" exact component={MyCart} />
                <PrivateRoute path="/user/address" exact component={ManageAddress}/>
                <PrivateRoute path="/user/profile" exact component={UserProfile} />
                <PrivateRoute path="/user/orders" exact component={MyOrders} />
                <PrivateRoute path="/user/profile/:userId" exact component={Profile} />
                <PrivateRoute path="/orders/:userId" exact component={MyOrders} />
                <PrivateRoute path="/checkout" exact component={Checkout} />
                <Route path="/wishlist" exact component={Wishlist} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
