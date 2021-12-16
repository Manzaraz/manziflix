// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm1RxWXubC1PCV81lMoRf7iuieMJlq8HI",
  authDomain: "manziflix-f5e86.firebaseapp.com",
  projectId: "manziflix-f5e86",
  storageBucket: "manziflix-f5e86.appspot.com",
  messagingSenderId: "903626141420",
  appId: "1:903626141420:web:25c0736e53c14a8311bfc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initilalize Auth
const auth = getAuth();

export { auth, app };
