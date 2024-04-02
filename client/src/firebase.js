// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "todos-21-75f01.firebaseapp.com",
    projectId: "todos-21-75f01",
    storageBucket: "todos-21-75f01.appspot.com",
    messagingSenderId: "400121375451",
    appId: "1:400121375451:web:ea87a48828c45db34b3afe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);