// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- ¡Añade esta línea!

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCy4FGLOo7cF1WbOUZyuXiSj-rRmNarjw",
  authDomain: "web-vue-musica.firebaseapp.com",
  projectId: "web-vue-musica",
  storageBucket: "web-vue-musica.firebasestorage.app",
  messagingSenderId: "400358765784",
  appId: "1:400358765784:web:b36118407845d9528513ad",
  measurementId: "G-75KXGYDEFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);