import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/database';
import "firebase/storage";
import 'firebase/analytics'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBO7rfMv7rFxcPfSJ9-2XTJd6nwd8mpKgU",
    authDomain: "eventmanagement-8316b.firebaseapp.com",
    databaseURL: "https://eventmanagement-8316b-default-rtdb.firebaseio.com",
    projectId: "eventmanagement-8316b",
    storageBucket: "eventmanagement-8316b.appspot.com",
    messagingSenderId: "773124685728",
    appId: "1:773124685728:web:c5946fb364458b4f182ec5",
    measurementId: "G-0QL3RXVC7T"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;