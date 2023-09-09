// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_N1Z4xFAsXvR88Zp36VQ-HkNbZ9bctVs",
  authDomain: "njy-follow-app-6580f.firebaseapp.com",
  projectId: "njy-follow-app-6580f",
  storageBucket: "njy-follow-app-6580f.appspot.com",
  messagingSenderId: "87185600793",
  appId: "1:87185600793:web:bf513add699e0975a75588",
  measurementId: "G-PLY0G5V5WW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth();
// export const auth = getAuth(app);