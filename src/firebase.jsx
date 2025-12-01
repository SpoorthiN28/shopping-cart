import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA-GkCb56i8mpZXE9vDtD4Eq1xlRWfJHdw",
  authDomain: "elegant-context-beca3.firebaseapp.com",
  projectId: "elegant-context-beca3",
  storageBucket: "elegant-context-beca3.firebasestorage.app",
  messagingSenderId: "334665823143",
  appId: "1:334665823143:web:5477a6fa4f1d9b9f0fbc82",
  measurementId: "G-BM4YBYKV74"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);