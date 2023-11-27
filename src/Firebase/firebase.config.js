// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Yik89qQm1r7LozgfW11uacyu7PW-fnc",
  authDomain: "need-a2861.firebaseapp.com",
  projectId: "need-a2861",
  storageBucket: "need-a2861.appspot.com",
  messagingSenderId: "887597121661",
  appId: "1:887597121661:web:60cf39399e23776ebab114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

 export default auth;

