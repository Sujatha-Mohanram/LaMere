import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { colRef,db } from '../../shared/firebase-config';
import {
  getFirestore, collection, getDocs, onSnapshot,
  addDoc, deleteDoc, doc, query, where, orderBy,serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'
import {
  getAuth, createUserWithEmailAndPassword
} from 'firebase/auth'

import { User } from 'src/app/shared/user.model';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 email!: string;
 password!: string;
 user!: User;
 

  constructor() { }

 
   
 


postUser(user: User)
  {
    const auth = getAuth();
    const timestamp = serverTimestamp();
    const email = user.email;
    const password = user.password;
    console.log(email+""+password);
   //createUserWithEmailAndPassword(auth,email,password)
  }

}