import React from 'react';
import { cartFetchData } from '../recoil/carts/cartHelpers';
import { useRecoilValue  } from 'recoil';
import { Link } from 'react-router-dom';

const OrderInfo = () => {
   //payment
   const { cartData } = useRecoilValue(cartFetchData);

   return (
    <div className="card-body">
        <div className="bz_cart_main_wrapper billing_info float_left">
            <div className="cart_tbl"> 
                <div className="table table-responsive">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th style={{width: '10%'}}>Product</th>
                                <th></th>
                                <th>Quantity</th>
                                <th style={{width: '15%'}}>Unit Price</th>
                                <th style={{width: '15%'}}>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((product, i) => (
                                <tr key={i}>
                                    <td>
                                    <img
                                        className="img-fluid"
                                        src={product.image}
                                        alt={product.name}
                                    />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>
                                        <div className="number_pluse">
                                            {product.quantity}
                                        </div>
                                    </td>
                                    <td>
                                        <i className="fas fa-rupee-sign fa-sm"></i>
                                        {product.price.toFixed(2)}
                                    </td>
                                    <td>
                                        <i className="fas fa-rupee-sign fa-sm"></i>
                                        {(product.price * product.quantity).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Link className="submit_btn" data-toggle="collapse" data-target="#collapseThree" to="#">Continue</Link>
            </div>
        </div>
    </div>
   );
};

export default OrderInfo;
