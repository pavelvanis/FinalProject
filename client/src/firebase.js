// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfhqeVE_MgdbnGsaP8Aoy7xnSS0S4Evj4",
  authDomain: "instagram-47369.firebaseapp.com",
  projectId: "instagram-47369",
  storageBucket: "instagram-47369.appspot.com",
  messagingSenderId: "350269581486",
  appId: "1:350269581486:web:26c78fb416c0cc7871a53f",
  measurementId: "G-3GT401N4TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);