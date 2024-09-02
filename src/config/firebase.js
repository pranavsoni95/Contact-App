// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrFHFoz6EdAJTu9Kju3a1akEgM0O2hdPI",
  authDomain: "vite-contact-6627c.firebaseapp.com",
  projectId: "vite-contact-6627c",
  storageBucket: "vite-contact-6627c.appspot.com",
  messagingSenderId: "538695909981",
  appId: "1:538695909981:web:84b254ff01983784de03b4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
