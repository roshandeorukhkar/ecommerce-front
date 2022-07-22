import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../common/utils";
import { listOrders, getStatusValues, updateOrderStatus } from "../apiCore/orderApi";
import moment from "moment";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [statusValues, setStatusValues] = useState([]);

    const { user, token } = isAuthenticated();

    const loadOrders = () => {
        listOrders(user._id, token).then(data => {
            setOrders(data.data);
        });
    };

    const loadStatusValues = () => {
        getStatusValues(user._id).then(data => {
            setStatusValues(data.data);
        });
    };

    useEffect(() => {
        loadOrders();
        loadStatusValues();
    }, []);

    const showOrdersLength = () => {
        if (orders.length > 0) {
            return (
                <h1>
                    Total orders: {orders.length}
                </h1>
            );
        } else {
            return <h1 className="text-danger">No orders</h1>;
        }
    };

    const showInput = (key, value) => (
        <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{key}</div>
            </div>
            <input
                type="text"
                value={value}
                className="form-control"
                readOnly
            />
        </div>
    );

    const handleStatusChange = (e, orderId) => {
        updateOrderStatus(user._id, token, orderId, e.target.value).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
                    loadOrders();
                }
            }
        );
    };

    const showStatus = o => (
        <div className="form-group">
            <h3 className="mb-4">{o.status}</h3>
            
        </div>
    );

    return (
        <div className="row">
            <div className="col-md-12">
                {orders.map((o, oIndex) => {
                    return (
                        <div
                            className="product-order row"
                            key={oIndex}
                            
                        >
                            <div className="order-product-list col-md-12">
                                <div className="product_details col-12 float_left">
                                    <div className="img_product">
                                        <img className="img-fluid" src={o.productData[0].images[Object.keys(o.productData[0].images)[0]][0]} alt="img"/>
                                    </div>
                                    <div className="image_heading">{o.productData[0].name}</div>
                                    <div className="product_content">
                                        <div className="rate">
                                            <p>{o.productData[0].description}</p>
                                            <p><span className="product_content_span_font">Color: </span></p>
                                            <p><span className="product_content_span_font">Quantity: </span>{o.products[0].quantity}</p>
                                            <h3><i className="fas fa-rupee-sign fa-sm"></i>{o.productData[0].price}</h3>
                                        </div>
                                    </div>
                                    <div className="product_content">
                                        <div className="rate">
                                            <p><span className="product_content_span_font"> Ordered on:</span>{moment(o.createdAt).fromNow()}</p>
                                            <p><span className="product_content_span_font">Expected Delivery Date:</span></p>
                                            <p><span className="product_content_span_font"> Delivery address: </span>{o.adrressData[0].address+' '+' '+o.adrressData[0].city+' '+', '+o.adrressData[0].country+' '+o.adrressData[0].state+' '+', '}<b>{o.adrressData[0].pincode}</b></p>
                                            <p><span className="product_content_span_font"> Payment: </span> {o.transaction_id}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_details col-12 float_left">
                                    <div className="rate">
                                        <p><span>Delivery Status</span></p>
                                        <StepProgressBar
                                            startingStep={0}
                                            steps={[
                                            {
                                                label: "Ordered",
                                                name: "Ordered",
                                            },
                                            {
                                                label: "Shipped",
                                                name: "Shipped",
                                            },
                                            {
                                                label: "Out For Delivery",
                                                name: "Out For Delivery",
                                            },
                                            {
                                                label: "Delivered",
                                                name: "Delivered",
                                            }
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Orders;
