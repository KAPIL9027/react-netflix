// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChO6WA6Bdr7Izs_XMSCrBIPHUi1oJMe40",
  authDomain: "netflixgpt-ee4a4.firebaseapp.com",
  projectId: "netflixgpt-ee4a4",
  storageBucket: "netflixgpt-ee4a4.appspot.com",
  messagingSenderId: "940957212396",
  appId: "1:940957212396:web:709da82bf902ffa0790fc9",
  measurementId: "G-MGVXDPF82W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();