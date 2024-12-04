// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl1vm-zXbfobwpNLUJq-rKXT1i9fOEtUE",
  authDomain: "busybuy-c915c.firebaseapp.com",
  projectId: "busybuy-c915c",
  storageBucket: "busybuy-c915c.firebasestorage.app",
  messagingSenderId: "305364649603",
  appId: "1:305364649603:web:8f4010471d195e464dbdb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);