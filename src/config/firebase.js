import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyC7ZnM2Ham6U01DB7fdQRn4ZBatP--0U14",
  authDomain: "tiktok-jornada-3be5a.firebaseapp.com",
  projectId: "tiktok-jornada-3be5a",
  storageBucket: "tiktok-jornada-3be5a.appspot.com",
  messagingSenderId: "489807489725",
  appId: "1:489807489725:web:fd286e981d1034cf9425d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
