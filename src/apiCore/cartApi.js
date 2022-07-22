import { API } from "../config";
import axios from 'axios';

export const createCart = (cartItemData) => {
    return axios.post(`${API}/cart/create`, cartItemData)
};

export const getCartList = (userId)=> {
    return axios.get(`${API}/cart/list/${userId}`)
};

export const removeCartItemById = (userId, id) => {
    return fetch(`${API}/cart/delete/${userId}/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};
//working on........
export const removeCartItems = (userId, token) => {
    console.log("userId=============0",userId)
    return fetch(`${API}/cart/delete/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        Authorization:`Bearer ${token}`
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};