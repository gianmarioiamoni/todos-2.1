// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-auth-f540f.firebaseapp.com",
    projectId: "mern-auth-f540f",
    storageBucket: "mern-auth-f540f.appspot.com",
    messagingSenderId: "472945946541",
    appId: "1:472945946541:web:908d756697dd411416fb24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);