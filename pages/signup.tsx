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
  password: "",
};

const Signup = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required "),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
  });
  const submitForm = (values: any) => {
    console.log("values", values);
  };
  return (
    <div>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h4>Sign up</h4>
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
                <InputField
                  className={styles.inputFieldClass}
                  name="password"
                  placeholder="Enter Password"
                  controlId="ControlInput2"
                  value={values.password}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                  type="password"
                  error={errors.password}
                  label="Password"
                />
                <div className="d-flex flex-column gap-3 w-100 mt-4 justify-content-center">
                  <Button
                    className="w-100"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    {isSubmitting ? "Saving..." : "Save"}
                  </Button>
                  <div className={styles.signUpDiv}>
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
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
