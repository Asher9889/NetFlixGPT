// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV6NKFuuOhGcMdlYeN2NI32BDCPwU0IR0",
  authDomain: "netflixgpt-fd419.firebaseapp.com",
  projectId: "netflixgpt-fd419",
  storageBucket: "netflixgpt-fd419.appspot.com",
  messagingSenderId: "128210160546",
  appId: "1:128210160546:web:512225323fd056b11080fb",
  measurementId: "G-DTXRJ6K3S8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();