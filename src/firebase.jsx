// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { doc, Firestore, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0ZkAJhPpsoI-zD9j27KCRAKvkBtK4u-w",
  authDomain: "fir-authentication-72c41.firebaseapp.com",
  projectId: "fir-authentication-72c41",
  storageBucket: "fir-authentication-72c41.appspot.com",
  messagingSenderId: "201393447610",
  appId: "1:201393447610:web:a1ad3e32c9a6c2263a5883"
};

// const firestore = getFirestore();
// const specialOftheDay = doc(firestore, "")
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;