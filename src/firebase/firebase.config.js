// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsRfsMTTD455n_T4B0SsZm-JE5bR-kPhM",
  authDomain: "the-dragon-news-client-ab9cf.firebaseapp.com",
  projectId: "the-dragon-news-client-ab9cf",
  storageBucket: "the-dragon-news-client-ab9cf.appspot.com",
  messagingSenderId: "853513372095",
  appId: "1:853513372095:web:aa4b7254c48ea0f2aca10a",
};

// Initialize Firebase app. export app by default.
const app = initializeApp(firebaseConfig);
export default app;
