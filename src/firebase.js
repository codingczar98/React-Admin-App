import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAGMAVQ1Isqf_QxMNDKv1Z4zpBvE0sQQRw",
    authDomain: "react-admin-app-ef793.firebaseapp.com",
    projectId: "react-admin-app-ef793",
    storageBucket: "react-admin-app-ef793.appspot.com",
    messagingSenderId: "660625613852",
    appId: "1:660625613852:web:a6be5f2dc43bd98417abd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);