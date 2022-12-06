import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
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
 export const app = initializeApp(firebaseConfig);
  