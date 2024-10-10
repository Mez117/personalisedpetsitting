import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALz_bxTZo_THFcOkP-b48MSCVbJB2y2oM",
    authDomain: "petsitting-availability.firebaseapp.com",
    projectId: "petsitting-availability",
    storageBucket: "petsitting-availability.appspot.com",
    messagingSenderId: "473309099018",
    appId: "1:473309099018:web:a4d9cc4ffa1aa74909dbf3"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };