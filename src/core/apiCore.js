import { API } from "../config";
import queryString from "query-string";

export const getProducts = sortBy => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getTopCategories = categoryId => {
    return fetch(`${API}/topcategories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit,
        skip,
        filters
    };
    return fetch(`${API}/products/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const list = params => {
    const query = queryString.stringify(params);
    return fetch(`${API}/products/search?${query}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const read = productId => {
    return fetch(`${API}/product/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = productId => {
    return fetch(`${API}/products/related/${productId}`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => {
    return fetch(`${API}/braintree/getToken/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const processPayment = (userId, token, paymentData) => {
    return fetch(`${API}/braintree/payment/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(paymentData)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const createOrder = (customerId, token, createOrderData) => {
    return fetch(`${API}/order/create/${customerId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ order: createOrderData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const addProdcutToWishlist = (userId, token, wishlistData) => {
    return fetch(`${API}/wishlist/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ wishlist: wishlistData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const sliderList = () =>{
    return fetch(`${API}/sliderList`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
            // Authorization:`Bearer ${token}`
        },
    }).then(responce =>{
        return responce.json();
    }).catch( err =>
        console.log(err)
    )
}

export const advertiseListAPI = () =>{
    return fetch(`${API}/advertiseList`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
            // Authorization:`Bearer ${token}`
        },
    }).then(responce =>{
        return responce.json();
    }).catch( err =>
        console.log(err)
    )
}

export const partnerImgListAPI = () =>{
    return fetch(`${API}/partnerImgList`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
            // Authorization:`Bearer ${token}`
        },
    }).then(responce =>{
        return responce.json();
    }).catch( err =>
        console.log(err)
    )
}

export const createCart = (data, token) => {
    return fetch(`${API}/cart/create`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
            Authorization:`Bearer ${token}`
        },
        body: JSON.stringify({ data: data })
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getCartList = (userId)=> {
    return fetch(`${API}/cart/list/${userId}`, {
        method: "GET",
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
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
export const removeCartItems = (userId) => {
    console.log("userId=============0",userId)
    return fetch(`${API}/cart/delete/${userId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        //Authorization:`Bearer ${token}`
    }).then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};