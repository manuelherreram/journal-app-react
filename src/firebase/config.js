// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyQhRt64iCE6C-SiKILpAgGaFIcZJ3mD4",
  authDomain: "react-cursos-13076.firebaseapp.com",
  projectId: "react-cursos-13076",
  storageBucket: "react-cursos-13076.appspot.com",
  messagingSenderId: "579501240373",
  appId: "1:579501240373:web:d858350fe8a7ff6ab4017c",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
