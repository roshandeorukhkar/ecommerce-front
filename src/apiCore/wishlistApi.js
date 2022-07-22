import { API } from "../config";
import axios from "axios";

export const addProdcutToWishlist = (userId, wishlistData) => {
    return axios.post(`${API}/wishlist/create/${userId}`, wishlistData)
};

export const getWishlist = (userId) => {
    return axios.get(`${API}/wishlist/by/user/${userId}`)
};

export const removeFromWishlist = (wishlist,wishlistId) => {
    //return axios.delete(`${API}/wishlist/delete/${wishlistId}`,wishlist)
    return fetch(`${API}/wishlist/delete/${wishlistId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(wishlist)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

