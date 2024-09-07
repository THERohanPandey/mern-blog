// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-338dc.firebaseapp.com",
  projectId: "mern-blog-338dc",
  storageBucket: "mern-blog-338dc.appspot.com",
  messagingSenderId: "830815479387",
  appId: "1:830815479387:web:7c398bce1b18275dd2c17e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
