import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

import {RegisterService } from './register.service'
import { User } from 'src/app/shared/user.model'; 

import { HttpClient } from '@angular/common/http';
import { Observable, timestamp } from 'rxjs';
import { colRef,db } from '../../shared/firebase-config';
import {
  getFirestore, collection, getDocs, onSnapshot,
  addDoc, deleteDoc, doc, query, where, orderBy,serverTimestamp,
  getDoc, updateDoc, setDoc
} from 'firebase/firestore'
import {
  getAuth, createUserWithEmailAndPassword, updateCurrentUser, UserCredential
} from 'firebase/auth'




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ RegisterService]

})
export class RegisterComponent implements OnInit {
user!: User
displayName !: string;
email !: string;
  constructor(route:ActivatedRoute,public registerService: RegisterService) {
    //super(route);
  }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm){
  console.log(form.value.email + " "+ form.value.password);
  const auth = getAuth();
  createUserWithEmailAndPassword(auth,form.value.email,form.value.password)
      .then((cred)=>{
          setDoc(doc(db, 'users', cred.user.uid), { username: form.value.displayName})
          .then(()=>{
            const message= document.getElementById('message');
              if(message!==null)
              message.innerHTML="user created successfully :"
              form.reset();

          })
     })
        .catch((err)=>{
          console.log(err.message);
        })
 

  
}
}
