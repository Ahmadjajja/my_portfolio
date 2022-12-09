// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdOmN_KpVT0OKn5LULe1ubPgAcFgEy1aw",
  authDomain: "ahmad-jajja.firebaseapp.com",
  projectId: "ahmad-jajja",
  storageBucket: "ahmad-jajja.appspot.com",
  messagingSenderId: "477245282812",
  appId: "1:477245282812:web:21c9bca4135fa4891c7a79",
  measurementId: "G-14RRSGT3E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);