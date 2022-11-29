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
  getAuth
} from 'firebase/auth'
import { User } from 'src/app/shared/user.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
loggedInUser!: User
email!: string;
 password!: string;
 user!: User;
  constructor() { }

  athenticateUser(){
    const loggedin = getAuth();
  }


}
