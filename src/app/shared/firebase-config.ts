//import  { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
//import  { getFirestore, Timestamp, FieldValue } from 'firebase-admin/firestore';
import {initializeApp} from 'firebase/app'
import {
    getFirestore, collection, getDocs, orderBy
} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyB0sU6-uiwc1r4h7yZcGCuotogahOzxTzM",
    authDomain: "lamere-fefef.firebaseapp.com",
    databaseURL: "https://lamere-fefef-default-rtdb.firebaseio.com",
    projectId: "lamere-fefef",
    storageBucket: "lamere-fefef.appspot.com",
    messagingSenderId: "761067903960",
    appId: "1:761067903960:web:7c2c0cd188178f0bd7b0ad",
    measurementId: "G-HZRZLX2DV5"
  };
  initializeApp(firebaseConfig);

  //initialise service
  const db = getFirestore();
  

  // get the collection reference
   const colRef = collection(db,'faculty');
   
 export { colRef, db}