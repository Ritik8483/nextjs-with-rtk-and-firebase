// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYCexvofObCkzajww67V_QfNrhcUR9zZI",
  authDomain: "next-auth-app-b11bd.firebaseapp.com",
  projectId: "next-auth-app-b11bd",
  storageBucket: "next-auth-app-b11bd.appspot.com",
  messagingSenderId: "276753005090",
  appId: "1:276753005090:web:70636f7306e52a8d6c287b",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
