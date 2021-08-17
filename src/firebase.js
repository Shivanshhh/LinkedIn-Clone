// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBXfJxG8GgqQK4wQv1VUdKsPnSKLS21vA8",
    authDomain: "linkedin-clone-bce46.firebaseapp.com",
    projectId: "linkedin-clone-bce46",
    storageBucket: "linkedin-clone-bce46.appspot.com",
    messagingSenderId: "776198548414",
    appId: "1:776198548414:web:5d5fd669dda11a35c027ef",
    measurementId: "G-YK2BTNSZ6B"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};