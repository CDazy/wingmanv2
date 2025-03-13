// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfy59aryJces5Sq9ggsUo7V77cSREJK_g",
  authDomain: "wingman-c5635.firebaseapp.com",
  projectId: "wingman-c5635",
  storageBucket: "wingman-c5635.appspot.com",
  messagingSenderId: "470483452302",
  appId: "1:470483452302:web:24cac57bf251ec156864df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);