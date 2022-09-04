// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbvOO7ZV_YO3X5pOrz8zN64UzMm2EgO9Y",
  authDomain: "badger-8adc2.firebaseapp.com",
  projectId: "badger-8adc2",
  storageBucket: "badger-8adc2.appspot.com",
  messagingSenderId: "254842968168",
  appId: "1:254842968168:web:6c6a4ebe4cd0da99b2c3dd"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth }