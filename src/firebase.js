// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-c7c25.firebaseapp.com",
  projectId: "real-estate-c7c25",
  storageBucket: "real-estate-c7c25.appspot.com",
  messagingSenderId: "1077332193351",
  appId: "1:1077332193351:web:9a6c135aabc5633f384162",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
