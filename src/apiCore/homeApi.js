import { API } from "../config";
import axios from 'axios';

export const getBraintreeClientToken = (userId) => {
    return axios.post(`${API}/braintree/getToken/${userId}`)
};

export const processPayment = (userId, paymentData) => {
    return axios.post(`${API}/braintree/payment/${userId}`,paymentData)
};

export const sliderList = () =>{
    return axios.get(`${API}/sliderList`)
}

export const advertiseListAPI = () =>{
    return axios.get(`${API}/advertiseList`)
}

export const partnerImgListAPI = () =>{
    return axios.get(`${API}/partnerImgList`)
}

export const addrating_api = (userId, token, productData) => {
    return fetch(`${API}/ratinglist/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ wishlist: productData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};