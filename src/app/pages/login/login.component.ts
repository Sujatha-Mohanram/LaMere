import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';


import { User } from 'src/app/shared/user.model'; 
import { LoginService } from './login.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { colRef,db } from '../../shared/firebase-config';
import {
  getFirestore, collection, getDocs, onSnapshot,
  addDoc, deleteDoc, doc, query, where, orderBy,serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'
import {
  getAuth, createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser
} from 'firebase/auth'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService]
})
export class LoginComponent implements OnInit {
user!: User ;
displayName !: string;
  constructor(route:ActivatedRoute,public loginService: LoginService) {
    //super(route);
  }

  ngOnInit(): void {
    this.userStateChange();

  }

  onSubmit(form: NgForm){
    console.log(form.value.email + " "+ form.value.password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth,form.value.email,form.value.password)
    .then((cred)=>{
  console.log("user logged In:",cred.user);
    form.reset();
    })
    .catch((err)=>{
      console.log(err.message);
    })
    //this.registerService.postUser(form.value);
  }
  
  onLogout(form: NgForm)
  {
    const auth = getAuth();
    signOut(auth)
    .then(()=>{
      console.log("user signed out")
    })
    .catch((err)=>{
      console.log(err.message);
    })

  }

  userStateChange(){
    const auth = getAuth();
    let email: string='';
    onAuthStateChanged(auth,(user)=>{
      if(user)
      {
        console.log("user logged in: " +user.uid);
      }
      else{
        console.log('user not logged in')
      }
     // email =<any>auth.currentUser?.email;
      console.log('user state changed:'+ user);
    })
   // this.user.userstatus = 'loggedIn';
    if(auth.currentUser != null){
    //  this.user.email=email;
    }
  }

}
