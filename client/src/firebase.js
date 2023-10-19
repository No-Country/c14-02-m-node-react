// ################################

// firebase => firebase.config.
// usuario y contraseña para conectarme a firebase.

// ################################

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK1oMMzyfCp4tK2R7rGKIq5meVzjEnTqk",
    authDomain: "airbnb-4384f.firebaseapp.com",
    projectId: "airbnb-4384f",
    storageBucket: "airbnb-4384f.appspot.com",
    messagingSenderId: "194923954090",
    appId: "1:194923954090:web:929331bacac42d4515b5d3",
    measurementId: "G-P4MVNSS8H3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);