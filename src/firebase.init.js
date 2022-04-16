// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJA_jmnK_FRmFrqT0d9LJt_m-ycC1kswY",
  authDomain: "click-to-splash.firebaseapp.com",
  projectId: "click-to-splash",
  storageBucket: "click-to-splash.appspot.com",
  messagingSenderId: "465331323149",
  appId: "1:465331323149:web:0209c9bc0cc8f667847044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;