import { initializeApp } from "firebase/app";
import { auth } from "../firebase/firebase.js";

const firebaseConfig = {
  apiKey: "AIzaSyD2tCH3z1LgLIjCg-zQgZAS4NyxzwOMODc",
  authDomain: "furniture-ecommerce-57a2e.firebaseapp.com",
  projectId: "furniture-ecommerce-57a2e",
  storageBucket: "furniture-ecommerce-57a2e.appspot.com",
  messagingSenderId: "164734847597",
  appId: "1:164734847597:web:b22fa3324d9ebcf2d64d64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;