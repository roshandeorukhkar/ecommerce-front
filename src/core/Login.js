import React, { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { signin } from "../auth/Cutomer";
import { getResendOTP } from "../auth/Cutomer";
import { authenticate, isAuthenticated } from "../common/utils";
import { otpVerification } from "../auth/Cutomer";
import RegistrationModal from "./RegistrationModal";

const Login = (props) => {
  const [loginDisplay, setLoginDisplay] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  const [values, setValues] = useState({
    mobile: "",
    mobileError: "",
  });

  const { mobile, mobileError } = values;
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
    formName: "login",
  });

  const {
    firstNumber,
    secondNumber,
    thirdNumber,
    fourthNumber,
    fifthNumber,
    sixthNumber,
    mobileNo,
    otpError,
    loading,
    redirectToReferrer,
    formName,
  } = otpValues;

  const handleRegistartionModalShow = (e) => {
    props.registrationModal();
    props.close();
  };
  const handleRegistartionModalClose = () => {
    setShowRegistrationModal(false);
  };

  const backRegistration = () => {
    setLoginDisplay(false);
  };
  const autoTab = (e) => {
    const BACKSPACE_KEY = 8;
    const DELETE_KEY = 46;
    // let tabindex = $(e.target).attr("tabindex") || 0;
    // tabindex = Number(tabindex);
    // if (e.keyCode === BACKSPACE_KEY) {
    //   tabindex -= 1;
    // } else if (e.keyCode !== DELETE_KEY) {
    //   tabindex += 1;
    // }
    // const elem = $("[tabindex=" + tabindex + "]");
    // if (elem[0]) {
    //   elem.focus();
    // }
  };

  //redirct of pages

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
    setOtpValues({ ...otpValues, [name]: event.target.value });
  };

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/user/dashboard" />;
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  const sendOTPLogin = (event) => {
    event.preventDefault();
    const min = 100000;
    const max = 999999;
    const otp = Math.floor(min + Math.random() * (max - min));
    signin({ mobile, otp }).then((data) => {
      console.log("------", data);
      if (data.status == false) {
        setValues({
          ...values,
          mobileError: data.errors,
        });
      } else {
        console.log("loginData...", data.otpData.otp);
        setValues({
          mobileError: "",
          mobile: "",
        });
        setOtpValues({
          ...otpValues,
          mobileNo: data.otpData.mobileNo,
        });
        setLoginDisplay(true);
      }
    });
  };

  const resendOTP = (event) => {
    event.preventDefault();
    const min = 100000;
    const max = 999999;
    const otp = Math.floor(min + Math.random() * (max - min));
    getResendOTP({ mobile: mobileNo, otp }).then((data) => {
      console.log("-----", data.otpData.otp);
    });
  };

  const verifyOTPLogin = (event) => {
    event.preventDefault();
    const otpNumber =
      firstNumber +
      secondNumber +
      thirdNumber +
      fourthNumber +
      fifthNumber +
      sixthNumber;
    otpVerification({
      mobileNo: mobileNo,
      otp: otpNumber,
      formName: formName,
    }).then((data) => {
      if (data.status == false) {
        console.log("data----", data);
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
    });
  };

  const loginModel = () => {
    return (
      <div id="sendOTP">
        <h4>Login With Mobile Number</h4>
        <br />
        <p>Enter your mobile number we will send you OTP to verify</p>
        <br />
        <div className="form-group row">
          <div className="col-12">
            <label>
              Phone Number<span className="error">*</span>
            </label>
          </div>
          <div className="col-12">
            <input
              type="text"
              maxLength={10}
              className="form-control"
              placeholder="Enter here"
              value={mobile}
              onChange={handleChange("mobile")}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <span className="error">{mobileError}</span>
          </div>
        </div>
        <button className="submit_btn ucfirst" onClick={sendOTPLogin}>
          Send OTP
        </button>
        <br />
        <br />
        <p>
          Don't have an account?{" "}
          <Link
            to="#"
            className="sky-blue"
            onClick={handleRegistartionModalShow}
          >
            {" "}
            Signup
          </Link>
          <RegistrationModal
            show={showRegistrationModal}
            close={handleRegistartionModalClose}
          />
        </p>
      </div>
    );
  };

  const otpVerifyModel = () => {
    return (
      <div id="verifyOTP">
        <h4>Login With Mobile Number</h4>
        <br />
        Please enter the OTP sent to your given number({otpValues.mobileNo}) or
        change mobile no. to{" "}
        <Link to="#" className="sky-blue" onClick={backRegistration}>
          click here
        </Link>{" "}
        <br />
        <div className="form-group row">
          <div className="col-12">
            <input
              type="text"
              autoComplete="new-password"
              className="form-control verify-otp-input"
              tabIndex={0}
              key={0}
              maxLength={1}
              onKeyUp={autoTab}
              value={firstNumber}
              onChange={handleChange("firstNumber")}
            />
            <input
              type="text"
              autoComplete="new-password"
              className="form-control verify-otp-input"
              tabIndex={1}
              key={1}
              maxLength={1}
              onKeyUp={autoTab}
              value={secondNumber}
              onChange={handleChange("secondNumber")}
            />
            <input
              type="text"
              autoComplete="new-password"
              className="form-control verify-otp-input"
              tabIndex={2}
              key={2}
              maxLength={1}
              onKeyUp={autoTab}
              value={thirdNumber}
              onChange={handleChange("thirdNumber")}
            />
            <input
              type="text"
              autoComplete="new-password"
              className="form-control verify-otp-input"
              tabIndex={3}
              key={3}
              maxLength={1}
              onKeyUp={autoTab}
              value={fourthNumber}
              onChange={handleChange("fourthNumber")}
            />
            <input
              type="text"
              autoComplete="new-password"
              className="form-control verify-otp-input"
              tabIndex={4}
              key={4}
              maxLength={1}
              onKeyUp={autoTab}
              value={fifthNumber}
              onChange={handleChange("fifthNumber")}
            />
            <input
              type="text"
              autoComplete="new-password"
              className="form-control verify-otp-input"
              tabIndex={5}
              key={5}
              maxLength={1}
              onKeyUp={autoTab}
              value={sixthNumber}
              onChange={handleChange("sixthNumber")}
            />
          </div>
          <span className="error">{otpError}</span>
        </div>
        <input type="hidden" name="formName" value={formName} />
        <input type="hidden" name="mobileNo" value={mobileNo} />
        <button className="submit_btn ucfirst" onClick={verifyOTPLogin}>
          {" "}
          Verify{" "}
        </button>
        <br />
        <br />
        <p>
          Not received you code?{" "}
          <Link to="#" className="sky-blue" onClick={resendOTP}>
            Resend Code
          </Link>
        </p>
      </div>
    );
  };

  return (
    <>
      <Modal show={props.show} onHide={props.close} backdrop="static" size="lg">
        <Modal.Body className="no-padding">
        <button
            type="button"
            className="close"
            onClick={props.close}
            style={{
              zIndex: 1,
              position: "relative",
              top: "5px",
              right: "5px",
            }}
          >
            &times;
          </button>
          <Container>
            <Row>
              <Col lg={7} md={7} className="login-popup-left">
                {!loginDisplay ? loginModel() : otpVerifyModel()}
              </Col>
              <Col lg={5} md={7} className="login-popup-right">
                <div id="sendOTPText">
                  <br />
                  <h2 className="white">Login</h2>
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

export default Login;
