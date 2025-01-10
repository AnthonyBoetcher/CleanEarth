// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkx5BtmYGh5behXtWqm3eFGQHLTMGqpRA",
  authDomain: "cleanearth-e1bb1.firebaseapp.com",
  projectId: "cleanearth-e1bb1",
  storageBucket: "cleanearth-e1bb1.firebasestorage.app",
  messagingSenderId: "409893464943",
  appId: "1:409893464943:web:42a027451aeec9cf94969a",
  measurementId: "G-308REEZV4M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);