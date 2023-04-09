// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKTalCo1pQjBu8A9J12QUQzU0ydh76Coc",
  authDomain: "notes-app-e3066.firebaseapp.com",
  projectId: "notes-app-e3066",
  storageBucket: "notes-app-e3066.appspot.com",
  messagingSenderId: "940572787056",
  appId: "1:940572787056:web:179181bedd90fbff42cfb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
