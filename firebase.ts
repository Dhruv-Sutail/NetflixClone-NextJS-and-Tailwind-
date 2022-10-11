// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkjGZSxJGrn3FxrYzzhnahMc8uyPnGL7Y",
  authDomain: "netflix-clone-1b2ff.firebaseapp.com",
  projectId: "netflix-clone-1b2ff",
  storageBucket: "netflix-clone-1b2ff.appspot.com",
  messagingSenderId: "202534855021",
  appId: "1:202534855021:web:96adc77acfe1fabc9a7a64",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
