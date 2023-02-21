import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "../src/components/reuseables/InputField";

const initialValues = {
  email: "",
};

const ForgotPassword = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required "),
  });
  const submitForm = (values: any) => {
    console.log("values", values);
  };
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h4>Forgot Password?</h4>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={submitForm}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
              isSubmitting,
            }) => (
              <Form className={styles.formGroup} onSubmit={handleSubmit}>
                <InputField
                  className={styles.inputFieldClass}
                  name="email"
                  placeholder="name@example.com"
                  controlId="ControlInput1"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  type="email"
                  error={errors.email}
                  label="Email address"
                />
                <div className="d-flex flex-column gap-3 w-100 justify-content-center">
                  <p
                    // onClick={() => navigate(-1)}
                    className={styles.forgotPass}
                  >
                    <Link href="/">Back to Login </Link>
                  </p>
                  <Button
                    className="w-100"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </Button>
                  {/* <div className={styles.signUpDiv}>
                    <p>
                      Already have an account?{" "}
                      <Link
                        href="/"
                        // onClick={() => navigate("signup")}
                        className={styles.signUpText}
                      >
                        Login
                      </Link>
                    </p>
                  </div> */}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
