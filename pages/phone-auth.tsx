import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import Link from "next/link";

const PhoneAuth = () => {
  const [value, setValue] = useState<any>();
  const submitForm = (e: any) => {
    e.preventDefault();
    toast.success("Toast is working");
    console.log(value);
  };
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h4 className="mt-2">
            {/* {mobileToken?.verificationId
              ? "Verify your OTP"
              : "Signup with Mobile"} */}
            Signup with Mobile
          </h4>
          <p className="m-0">
            {/* {mobileToken?.verificationId
              ? "Please check your registered mobile number,we have sent you a 6 digit One Time Password(OTP)"
              : "Please enter your 10 digit mobile number to continue signup using mobile number."} */}
            Please enter your 10 digit mobile number to continue signup using
            mobile number
          </p>

          {/* {mobileToken?.verificationId ? (
            <Form
              className={styles.formGroup}
              onSubmit={(e: any) => handleOTP(e)}
            >
              <Form.Label>Enter OTP here</Form.Label>
              <Form.Control
                placeholder="******"
                value={mobileOTP}
                onChange={(e: any) => setMobileOTP(e.target.value)}
                type="password"
              />
              <Button className="w-100 mt-4 mb-3" type="submit">
                Verify OTP
              </Button>
            </Form>
          ) : ( */}
          <Form
            noValidate
            //   validated={validateForm}
            className={styles.formGroup}
            onSubmit={(e: any) => submitForm(e)}
          >
            <Form.Label className="mt-3">Mobile Number</Form.Label>
            <PhoneInput
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
            {/* {validated ? (
                <p
                  style={{
                    color: "#dc3545",
                    textAlign: "left",
                    fontSize: "14px",
                    marginTop: "3px",
                  }}
                >
                  Please enter a correct mobile number
                </p>
              ) : (
                <></>
              )} */}
            {/* {validated && validateForm ? (
                <></>
              ) : ( */}
            {/* <div id="recaptcha-container"></div> */}
            {/* )} */}
            <p
              // onClick={() => navigate(-1)}
              className={`${styles.forgotPass} mb-3 mt-2`}
            >
              <Link href="/">Back to Login </Link>
            </p>
            <Button className="w-100 mb-3" type="submit">
              Send OTP
            </Button>
          </Form>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default PhoneAuth;
