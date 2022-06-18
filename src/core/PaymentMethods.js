import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Modal} from "react-bootstrap";

const PaymentMethods = () => {
   const { register } = useForm();
   
   //for add popup for placed order
   const [show, setShow] = useState(false);
   const handleClose = () => {
      setShow(false);
   }
   const handleShow = () => {
      setShow(true)
   };

   return (
        <div className="card-body">
            <div className="payment_method float_left">
            <p>
                <input type="radio" id="test3" value="1"  name="paymentType" {...register("paymentType")} defaultChecked="checked" readOnly={true}/>
                <label className="direct_bank" htmlFor="test3">Direct Bank Transfer
                <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                </label>
            </p>
            <p>
                <input type="radio" id="test4" value="2" name="paymentType" {...register("paymentType")} readOnly={true}/>
                <label htmlFor="test4">Cheque Payments
                <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                </label>
            </p>
            <p>
                <input type="radio" id="test5" value="3" name="paymentType" {...register("paymentType")} checked={true}/>
                <label htmlFor="test5">Cash On Delivery
                <span className="small-text">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</span>
                </label>
            </p>
            <p>
                <input type="radio" id="test6" value="4" name="paymentType" {...register("paymentType")} defaultChecked="cashOnDeliver" readOnly={true} />
                <label htmlFor="test6">Pay Pal</label>
            </p>
            <div className="payment_card">
                <img className="img-fluid" src="../assets/images/payment_card.png" alt="card"/>
                <button type="submit" onClick={handleShow} className="submit_btn" >Place Order</button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Order placed </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Your order has been placed successfully
                    </Modal.Body>
                </Modal>
            </div>
            </div>
        </div>
   );
};

export default PaymentMethods;
