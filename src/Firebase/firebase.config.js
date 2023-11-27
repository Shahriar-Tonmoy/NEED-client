// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF7rtw39oInC4daIWmv_bB0ckr-b5YfJI",
  authDomain: "brand-website-31e2e.firebaseapp.com",
  projectId: "brand-website-31e2e",
  storageBucket: "brand-website-31e2e.appspot.com",
  messagingSenderId: "328275414626",
  appId: "1:328275414626:web:8871c706564726e5748b3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

 export default auth;

