import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { signup } from "../auth/Cutomer";
import { otpVerification } from "../auth/Cutomer";
import { authenticate, isAuthenticated } from "../common/utils";
import Login from "./Login";
import { signin } from "../auth/Cutomer";

const RegistrationModel = (props) => {
  const [show, setShow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { user } = isAuthenticated();

  const [values, setValues] = useState({
    mobile: "",
    mobile_error: "",
    firstName: "",
    firstName_error: "",
    lastName: "",
    lastName_error: "",
    error: "",
    success: false,
    otp: "",
  });

  const [otpValues, setOtpValues] = useState({
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
    fifthNumber: "",
    sixthNumber: "",
    mobileNo: "",
    otpError: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { mobile, firstName, lastName, success, error } = values;

  const handleShow = () => {
    setShow(true);
    setShowForm(false);
  };
  const handleClose = () => {
    console.log("Registration form");
    setShow(false);
  };

  const handleChange = (name) => (event) => {
    setOtpValues({ ...otpValues, [name]: event.target.value });
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    const min = 100000;
    const max = 999999;
    const otp = Math.floor(min + Math.random() * (max - min));
    setValues({ ...values, error: false });
    signup({ mobile, firstName, lastName, otp }).then((data) => {
      console.log("data", data);
      if (data.status == false) {
        setValues({
          ...values,
          mobile_error: data.errors.mobile,
          firstName_error: data.errors.firstName,
          lastName_error: data.errors.lastName,
          error: true,
          success: false,
        });
      } else {
        console.log("OTP-- ", data.otpData.otp);

        setValues({
          ...values,
          mobile: "",
          mobile_error: "",
          firstName: "",
          firstName_error: "",
          lastName: "",
          lastName_error: "",
          error: "",
          success: true,
        });
        setOtpValues({ ...otpValues, mobileNo: data.otpData.mobileNo });
        setShowForm(true);
      }
    });
  };

  const redirectUser = () => {
    if (otpValues.redirectToReferrer) {
      return <Redirect to="/user/dashboard" />;
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const resendOTP = (event) => {
    event.preventDefault();
    const min = 100000;
    const max = 999999;
    const otp = Math.floor(min + Math.random() * (max - min));
    signin({ mobile: otpValues.mobileNo, otp }).then((data) => {
      console.log("-----", data.otpData.otp);
    });
  };

  const verifyOTPRegister = (event) => {
    event.preventDefault();
    const otpNumber =
      otpValues.firstNumber +
      otpValues.secondNumber +
      otpValues.thirdNumber +
      otpValues.fourthNumber +
      otpValues.fifthNumber +
      otpValues.sixthNumber;
    otpVerification({ mobileNo: otpValues.mobileNo, otp: otpNumber }).then(
      (data) => {
        console.log("data", data);
        if (data.status == false) {
          setOtpValues({
            ...otpValues,
            otpError: data.message,
          });
        } else {
          authenticate(data, () => {
            setOtpValues({
              ...otpValues,
              firstNumber: "",
              secondNumber: "",
              thirdNumber: "",
              fourthNumber: "",
              fifthNumber: "",
              sixthNumber: "",
              otpError: "",
              loading: false,
              redirectToReferrer: true,
            });
          });
          //setShowForm(false);
        }
      }
    );
  };

  const autoTab = (e) => {
    const BACKSPACE_KEY = 8;
    const DELETE_KEY = 46;
    let tabindex = $(e.target).attr("tabindex") || 0;
    tabindex = Number(tabindex);
    if (e.keyCode === BACKSPACE_KEY) {
      tabindex -= 1;
    } else if (e.keyCode !== DELETE_KEY) {
      tabindex += 1;
    }
    const elem = $("[tabindex=" + tabindex + "]");
    if (elem[0]) {
      elem.focus();
    }
  };

  const signUpForm = () => (
    <div>
      <form>
        <h4>New User, Signup with your mobile number to get started</h4>
        <br />
        <div className="form-group row">
          <div className="col-12">
            <label>
              Mobile Number<span className="error">*</span>
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              className="form-control"
              onChange={handleChange("mobile")}
              value={values.mobile}
              maxLength="10"
              placeholder="Enter mobile no(Ex.9999999999)"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <div className="error">{values.mobile_error}</div>
          </div>
          <div className="col-12 margin-t-15">
            <div className="col-6 f-l" style={{ paddingLeft: "0px" }}>
              <label>
                First Name<span className="error">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                onChange={handleChange("firstName")}
                value={firstName}
                placeholder="Enter first Name"
              />
              <div className="error">{values.firstName_error}</div>
            </div>
            <div className="col-6 f-l" style={{ paddingRight: "0px" }}>
              <label>
                Last Name<span className="error">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                onChange={handleChange("lastName")}
                value={lastName}
                placeholder="Enter last name"
              />
              <div className="error">{values.lastName_error}</div>
            </div>
          </div>
        </div>
        <button className="submit_btn ucfirst" onClick={clickSubmit}>
          Send OTP
        </button>
        <br />
        <br />
        <p>
          Already have an account?{" "}
          <Login
            newClassName="sky-blue"
            assignName="Signin"
            onClick={handleClose}
          />
        </p>
      </form>
    </div>
  );

  const verifyOTPRegisterForm = () => (
    <div>
      <form>
        <h4>Login With Mobile Number</h4>
        <br />
        <p>Please enter the OTP sent to your given number or change.</p>
        <br />
        <div className="form-group row">
          <div className="col-12">
            <input
              type="text"
              maxLength="1"
              tabIndex={0}
              key={0}
              onKeyUp={autoTab}
              value={otpValues.firstNumber}
              onChange={handleChange("firstNumber")}
              autoComplete="new-password"
              className="form-control verify-otp-input"
            />
            <input
              type="text"
              maxLength="1"
              tabIndex={1}
              key={1}
              onKeyUp={autoTab}
              value={otpValues.secondNumber}
              onChange={handleChange("secondNumber")}
              autoComplete="new-password"
              className="form-control verify-otp-input"
            />
            <input
              type="text"
              maxLength="1"
              tabIndex={2}
              key={2}
              onKeyUp={autoTab}
              value={otpValues.thirdNumber}
              onChange={handleChange("thirdNumber")}
              autoComplete="new-password"
              className="form-control verify-otp-input"
            />
            <input
              type="text"
              maxLength="1"
              tabIndex={3}
              key={3}
              onKeyUp={autoTab}
              value={otpValues.fourthNumber}
              onChange={handleChange("fourthNumber")}
              autoComplete="new-password"
              className="form-control verify-otp-input"
            />
            <input
              type="text"
              maxLength="1"
              tabIndex={4}
              key={4}
              onKeyUp={autoTab}
              value={otpValues.fifthNumber}
              onChange={handleChange("fifthNumber")}
              autoComplete="new-password"
              className="form-control verify-otp-input"
            />
            <input
              type="text"
              maxLength="1"
              tabIndex={5}
              key={5}
              onKeyUp={autoTab}
              value={otpValues.sixthNumber}
              onChange={handleChange("sixthNumber")}
              autoComplete="new-password"
              className="form-control verify-otp-input"
            />
          </div>
          <span className="error">{otpValues.otpError}</span>
        </div>
        <input type="hidden" name="mobileNo" value={otpValues.mobileNo} />
        <button className="signup_btn ucfirst" onClick={verifyOTPRegister}>
          Signup
        </button>
        <br />
        <br />
        <p>
          Not received you code?{" "}
          <Link to="#" className="sky-blue" onClick={resendOTP}>
            Resend Code
          </Link>
        </p>
      </form>
    </div>
  );

  return (
    <>
      <Link to="#" onClick={handleShow} className={props.newClassName}>
        {props.assignName}
      </Link>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        size="lg"
        onHide={handleClose}
      >
        <Modal.Body className="no-padding">
          <button
            type="button"
            className="close"
            onClick={handleClose}
            style={{
              zIndex: "999999 !important",
              position: "relative",
              top: "5px",
              right: "5px",
            }}
          >
            &times;
          </button>
          <Container>
            <Row>
              <Col lg={7} md={7} xs={12} className="login-popup-left">
                <div id="sendOTPRegister">
                  {!showForm ? signUpForm() : verifyOTPRegisterForm()}
                </div>
              </Col>
              <Col lg={5} md={5} xs={12} className="login-popup-right">
                <div>
                  <br />
                  <h2 className="white">Registration</h2>
                  <br />
                  <br />
                  <p className="login-text">
                    Get access to your Orders, Wishlist and Recommmendations
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      {redirectUser()}
    </>
  );
};

export default RegistrationModel;
