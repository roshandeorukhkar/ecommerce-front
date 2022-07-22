import axios from 'axios';
import { API } from "../config";

// const Instance = () =>axios.create({
//     baseURL:`${API}/`,
// })

// const requestHandler = request => {
//     request.headers.isAuthenticated = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlkYmZmMjRkYzVlZjFmNDBjOGQxYjgiLCJpYXQiOjE2NTc2MDY1NTJ9.nwkVcembS5aGngsgnlXZp6dhLxlIf7xwf8-ZzSz5xro';  
//     console.log(request)
//     return request;
// };

// const responseHandler = response => {
//     if (response.status === 401) {
//         window.location = '/signin';
//     }

//     return response;
// };

// const errorHandler = error => {
//     return Promise.reject(error);
// };

// Instance.interceptors.request.use(
//     (request) => requestHandler(request),
//     (error) => errorHandler(error)
// );

// Instance.interceptors.response.use(
//     (response) => responseHandler(response),
//     (error) => errorHandler(error)
//  );

// Instance.interceptors.response.use((response) => {
//     console.log(response)
//     return response;
// });

//export default Instance;