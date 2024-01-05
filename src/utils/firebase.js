// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-app-fe7eb.firebaseapp.com",
  projectId: "next-blog-app-fe7eb",
  storageBucket: "next-blog-app-fe7eb.appspot.com",
  messagingSenderId: "376873038851",
  appId: "1:376873038851:web:0729ce119992c70b00ca36",
  measurementId: "G-HBYZ6SN219"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);