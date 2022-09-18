import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBmK5DwSG8N_gNIsBXa8vE-SIAM_iJS0U",
  authDomain: "react-test-f0083.firebaseapp.com",
  projectId: "react-test-f0083",
  storageBucket: "react-test-f0083.appspot.com",
  messagingSenderId: "6882613416",
  appId: "1:6882613416:web:69665a9a024b2e4b364a9d",
  measurementId: "G-7R1T36FDNQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
