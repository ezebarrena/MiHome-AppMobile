// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASN2YskPgdkXLUZX19YL1VjcRncN-27M8",
  authDomain: "mihome-dabdf.firebaseapp.com",
  projectId: "mihome-dabdf",
  storageBucket: "mihome-dabdf.appspot.com",
  messagingSenderId: "962086205560",
  appId: "1:962086205560:web:42b27869613289fca0558d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);