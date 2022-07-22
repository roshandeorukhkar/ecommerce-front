import { API } from "../config";
import axios from 'axios';

export const getTopCategories = () => {
    return axios.get(`${API}/topcategories`)
};

export const getCategories = () => {
    return axios.get(`${API}/categories`)
};

// export const createCategory = (userId, token, category) => {
//     return axios.post(`${API}/category/create/${userId}`, category)
// };

// export const updateCategory = (categoryId, userId, token, category) => {
//     return fetch(`${API}/category/${categoryId}/${userId}`, {
//         method: 'PUT',
//         headers: {
//             // content type?
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(category)
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };

// export const getCategory = categoryId => {
//     return fetch(`${API}/category/${categoryId}`, {
//         method: 'GET'
//     })
//         .then(response => {
//             return response.json();
//         })
//         .catch(err => console.log(err));
// };
