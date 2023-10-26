import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCK1oMMzyfCp4tK2R7rGKIq5meVzjEnTqk",
    authDomain: "airbnb-4384f.firebaseapp.com",
    projectId: "airbnb-4384f",
    storageBucket: "airbnb-4384f.appspot.com",
    messagingSenderId: "194923954090",
    appId: "1:194923954090:web:929331bacac42d4515b5d3",
    measurementId: "G-P4MVNSS8H3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);