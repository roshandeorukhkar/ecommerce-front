import { API } from "../config";
import axios from 'axios';
import axiosInstance from "../service/AxiosInstances";
//fetch for all adress data
export const readAddress = (userId) => {
    return axios.get(`${API}/customeraddress/read/${userId}`)
};

//add address
export const addAddress = (addressData) => {
    return axios.post(`${API}/customeraddress/add`, addressData)
};

//fetch for single address data by addressId
export const readAllAddress = (addressId) => {
    return axios.get(`${API}/customeraddress/readdata/${addressId}`)
};

//update address by Id
export const updateAddress = (addressId, addressData) => {
    return axios.post(`${API}/customeraddress/update/${addressId}`, addressData)
};

//remove address by Id
export const removeAddressById = (addressId, address) => {
    //return axios.delete(`${API}/customeraddress/delete/${addressId}`, address)
    return fetch(`${API}/customeraddress/delete/${addressId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(address)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};