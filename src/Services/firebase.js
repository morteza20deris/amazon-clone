// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3GHfyDbvNFOjBQhlvkCe1tfj_YyXmWlA",
  authDomain: "clone-ea98b.firebaseapp.com",
  projectId: "clone-ea98b",
  storageBucket: "clone-ea98b.appspot.com",
  messagingSenderId: "40230554311",
  appId: "1:40230554311:web:4b012b2c8fc349ff3ccce2",
  measurementId: "G-M1LGZGBC1H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
