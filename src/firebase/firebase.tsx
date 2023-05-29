import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "@firebase/database";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "login-bank-3149a",
  storageBucket: "login-bank-3149a.appspot.com",
  messagingSenderId: "736563933383",
  appId: process.env.APP_ID,
  databaseURL:
    "https://login-bank-3149a-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
const auth = getAuth(app);

export const db = getDatabase(app);

export { auth };
