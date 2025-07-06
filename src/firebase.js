import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABCD1234...", // Replace with yours
  authDomain: "paw-patrol-12345.firebaseapp.com",
  databaseURL: "https://paw-patrol-12345-default-rtdb.firebaseio.com",
  projectId: "paw-patrol-12345",
  storageBucket: "paw-patrol-12345.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234..."
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
