import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { storeUserToken } from "../src/components/redux/userSlice";
import styles from "../styles/Home.module.css";

const dashboard = () => {
  const router=useRouter();
  const dispatch=useDispatch();

  const localToken: any = JSON.parse(localStorage.getItem("userToken") || "{}");
  const userToken = useSelector((state: any) => state?.userSlice?.userToken);
  if (localToken && userToken) {
    router.push("/dashboard");
  }
  const handleLogout=()=>{
    dispatch(storeUserToken(""));
    localStorage.removeItem("userToken");
    router.push('/')
  }
  return (
    <div>
      <div className={`${styles.loginContainer} flex-column gap-2`}>
        Welcome to Dashboard
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default dashboard;
