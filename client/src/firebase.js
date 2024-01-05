// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3ca4f.firebaseapp.com",
  projectId: "mern-estate-3ca4f",
  storageBucket: "mern-estate-3ca4f.appspot.com",
  messagingSenderId: "103473517070",
  appId: "1:103473517070:web:734b876e4dce2e8801e25f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);