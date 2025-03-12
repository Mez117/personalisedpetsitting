import {initializeApp} from 'firebase/app';
import {getFirestore, collection, getDocs, addDoc, deleteDoc, query, where, orderBy} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyALz_bxTZo_THFcOkP-b48MSCVbJB2y2oM",
    authDomain: "petsitting-availability.firebaseapp.com",
    projectId: "petsitting-availability",
    storageBucket: "petsitting-availability.appspot.com",
    messagingSenderId: "473309099018",
    appId: "1:473309099018:web:a4d9cc4ffa1aa74909dbf3"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, getDocs, addDoc, deleteDoc, query, where, orderBy };