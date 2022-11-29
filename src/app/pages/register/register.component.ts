import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

import {RegisterService } from './register.service'
import { User } from 'src/app/shared/user.model'; 

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


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ RegisterService]

})
export class RegisterComponent implements OnInit {

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
console.log("user created:",cred.user);
form.reset();
  })
  .catch((err)=>{
    console.log(err.message);
  })
  //this.registerService.postUser(form.value);
}
}
