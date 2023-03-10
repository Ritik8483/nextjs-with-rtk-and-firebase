import styles from "../styles/Home.module.css";
import Link from "next/link";
import Form from "react-bootstrap/Form";
import { Button, Toast } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  facebook,
  github,
  googleImage,
  microsoft,
  otpLogo,
} from "../src/images/Logos";
import Image from "next/image";
import InputField from "../src/components/reuseables/InputField";
import { auth } from "../firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { storeUserToken } from "../src/components/redux/userSlice";
import { useRouter } from "next/router";

const initialValues = {
  email: "",
  password: "",
};

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  const localToken: any = JSON.parse(localStorage.getItem("userToken") || "{}");
  const userToken = useSelector((state: any) => state?.userSlice?.userToken);

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
  const handleGoogle = async () => {
    await signInWithPopup(auth, provider)
      .then((result: any) => {
        console.log(result);
        localStorage.setItem(
          "userToken",
          JSON.stringify(result?.user?.accessToken)
        );
        dispatch(storeUserToken(result?.user?.accessToken));
        if (result?.user?.accessToken) {
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
      });
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <h4>Login</h4>
          <div className={styles.optionsDiv}>
            <div
              onClick={handleGoogle}
              className={styles.googleParentContainer}
            >
              <Image
                src={googleImage}
                alt="googleImage"
                height="23"
                width="23"
              />
              <p className="mb-0">Sign in with Google</p>
            </div>
            <Link href="phone-auth" className={styles.mobileContainer}>
              <Image src={otpLogo} alt="mobileLogo" height="23" width="23" />
              <p className="mb-0 text-decoration-none text-black ">
                Sign in with Phone number
              </p>
            </Link>
          </div>
          <div className={styles.otherOpt}>
            <div className={styles.otherBox}>
              <Image src={facebook} alt="facebook" height="26" width="26" />
              <p className="mb-0">Facebook</p>
            </div>
            <div className={styles.otherBox}>
              <Image src={microsoft} alt="microsoft" height="26" width="26" />
              <p className="mb-0">Microsoft</p>
            </div>
            <div className={styles.otherBox}>
              <Image src={github} alt="github" height="26" width="26" />
              <p className="mb-0">Github</p>
            </div>
          </div>
          <span className={styles.hrLine}></span>
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
                <Link
                  href="forgot-password"
                  // onClick={() => navigate("forgot-password")}
                  className={styles.forgotPass}
                >
                  Forgot Password?
                </Link>
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
                      Don't have an account?{" "}
                      <Link
                        href="signup"
                        // onClick={() => navigate("signup")}
                        className={styles.signUpText}
                      >
                        Signup
                      </Link>
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
