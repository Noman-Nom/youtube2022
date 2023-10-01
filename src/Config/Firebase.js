// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "auth-crud-9c747.firebaseapp.com",
  projectId: "auth-crud-9c747",
  storageBucket: "auth-crud-9c747.appspot.com",
  messagingSenderId: "588241740408",
  appId: "1:588241740408:web:e137925df1ba5099a0c38d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);