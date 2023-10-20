// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSSP0RFovTGbrP7slMLrNKcR2-UhM0NS0",
  authDomain: "mihome-63a22.firebaseapp.com",
  projectId: "mihome-63a22",
  storageBucket: "mihome-63a22.appspot.com",
  messagingSenderId: "478744579990",
  appId: "1:478744579990:web:a64697734910472f0757b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);