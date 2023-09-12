import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; 
const firebaseConfig = {
  apiKey: "AIzaSyDJGTf-pvM6beIbLRZ-zhtFKR2B7PsEAIk",
  authDomain: "pacific-diode-329602.firebaseapp.com",
  projectId: "pacific-diode-329602",
  storageBucket: "pacific-diode-329602.appspot.com",
  messagingSenderId: "584602789713",
  appId: "1:584602789713:web:38016e1144f087e404d570",
  measurementId: "G-9RNX0QEEST"
};

const Firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(Firebase); // Initialize Firestore
const auth = getAuth(Firebase); // Initialize Auth
export { Firebase, firestore ,auth};


