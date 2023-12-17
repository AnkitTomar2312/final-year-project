// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg-X5bWOJLAOB4wjHH-n31h-f5SP0Vy70",
  authDomain: "aupdeshik.firebaseapp.com",
  projectId: "aupdeshik",
  storageBucket: "aupdeshik.appspot.com",
  messagingSenderId: "1073103713163",
  appId: "1:1073103713163:web:0a505857f77cf779c9758e",
  measurementId: "G-JCC3TQWC33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);