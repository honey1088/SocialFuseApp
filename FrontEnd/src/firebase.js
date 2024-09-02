import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjNig7nOJ6ED6XwPX52tWrvThLlApyM30",
  authDomain: "socialfuse-3bbc2.firebaseapp.com",
  projectId: "socialfuse-3bbc2",
  storageBucket: "socialfuse-3bbc2.appspot.com",
  messagingSenderId: "332154084838",
  appId: "1:332154084838:web:0ea2e4778481b4fe4e8a27",
  measurementId: "G-VF101564M0"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();