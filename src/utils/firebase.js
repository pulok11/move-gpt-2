// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChZTaNnfxIw_izJ3Rs9vajhtIirAncrRI",
    authDomain: "movie-gpt-30f74.firebaseapp.com",
    projectId: "movie-gpt-30f74",
    storageBucket: "movie-gpt-30f74.firebasestorage.app",
    messagingSenderId: "165949657548",
    appId: "1:165949657548:web:4489e32a783701c3cf8d69",
    measurementId: "G-F9LDJZTZ97"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(); 