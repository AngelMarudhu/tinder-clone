import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMc2jkg19orv13-XS_qw0TgS9pkTHRkDc",
  authDomain: "tinder-cne.firebaseapp.com",
  projectId: "tinder-cne",
  storageBucket: "tinder-cne.appspot.com",
  messagingSenderId: "673016825698",
  appId: "1:673016825698:web:5a6e2a1e5e921be5804e3b",
  measurementId: "G-B1PB86Q7JG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
