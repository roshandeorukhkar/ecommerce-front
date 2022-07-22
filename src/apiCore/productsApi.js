import { API } from "../config";
import queryString from "query-string";
import axios from "axios";

export const getProducts = sortBy => {
    return axios.get(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`)
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return axios.post(`${API}/products/by/search`, data)
};

export const list = params => {
    const query = queryString.stringify(params);
    return axios.post(`${API}/products/search?${query}`)
};

export const readProduct = productId => {
    return axios.get(`${API}/product/${productId}`)
};

export const listRelated = (productId) => {
    return axios.get(`${API}/products/related/${productId}`)
};

// export const deleteProduct = (productId, userId, token) => {
//     return axios.delete(`${API}/product/${productId}/${userId}`)
// };

// export const getProduct = productId => {
//     return axios.get(`${API}/product/${productId}`)
// };

// export const updateProduct = (productId, userId, product) => {
//     return axios.put(`${API}/product/${productId}/${userId}`, product)
// };

// export const createProduct = (userId, token, product) => {
//     return axios.put(`${API}/product/create/${userId}`, product)
// };