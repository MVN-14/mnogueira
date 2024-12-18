// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
//import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqRRnvTrz5DD5DWIKheOB5IeMm2agfKeM",
  authDomain: "mnogueira-1b0a1.firebaseapp.com",
  projectId: "mnogueira-1b0a1",
  storageBucket: "mnogueira-1b0a1.appspot.com",
  messagingSenderId: "280677184939",
  appId: "1:280677184939:web:3e0380c770e9690ec6ceee",
  measurementId: "G-28H8QCKLDV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
