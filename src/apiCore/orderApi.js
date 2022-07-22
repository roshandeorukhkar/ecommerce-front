import { API } from "../config";
import axios from "axios";

export const createOrder = (customerId, createOrderData) => {
    return axios.post(`${API}/order/create/${customerId}`,createOrderData)
};

export const getPurchaseHistory = (userId, token) => {
    return axios.get(`${API}/orders/by/user/${userId}`)
};

export const listOrders = (userId) => {
    return axios.get(`${API}/order/list/${userId}`)
};

export const getStatusValues = (userId) => {
    return axios.get(`${API}/order/status-values/${userId}`)
};

export const updateOrderStatus = (userId, orderId, status) => {
    return axios.post(`${API}/order/${orderId}/status/${userId}`,orderId, status)
};
