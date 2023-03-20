// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsT2uVR7-VOHj2rqHK53Gu2dh9BsX2xis",
  authDomain: "kalendar-a3efb.firebaseapp.com",
  projectId: "kalendar-a3efb",
  storageBucket: "kalendar-a3efb.appspot.com",
  messagingSenderId: "800335818200",
  appId: "1:800335818200:web:d197973dfa1e70292fd6ad",
  measurementId: "G-XVQ58HGKT1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase; // 소셜로그인
export const authService = firebase.auth(); // 로그인 모듈
