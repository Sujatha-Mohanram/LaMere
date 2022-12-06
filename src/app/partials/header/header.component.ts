import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  getAuth, createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser
} from 'firebase/auth'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.userStateChange();
  }

  onLogout()
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
        const loggedIn = document.querySelector('.logged-in') as HTMLElement | null;
        if(loggedIn != null){
          loggedIn.style.display = 'block'
        }
        const loggedOut = document.querySelector('.logged-out') as HTMLElement | null;
        if(loggedOut != null){
          loggedOut.style.display = 'none'
        }
        console.log("user logged in: " +user.uid);
      }
      else{
        const loggedIn = document.querySelector('.logged-in') as HTMLElement | null;
        if(loggedIn != null){
          loggedIn.style.display = 'none'
        }
        const loggedOut = document.querySelector('.logged-out') as HTMLElement | null;
        if(loggedOut != null){
          loggedOut.style.display = 'block'
        }
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

  userLoggedOut(toggle:string){
    const loggedOut = document.querySelector('.logged-out') as HTMLElement | null ;
    if(toggle !== null && toggle =='user' )
    {
    //loggedOut.forEach(item =>item.style.display = 'block' )
    if (loggedOut != null) {
      loggedOut.style.display = 'block';
    }
  }else{
    if (loggedOut != null) {
      loggedOut.style.display = 'none';
    }
  }
  }

  userLoggedIN(toggle:string){
    
    const loggedIn = document.querySelector('.logged-in') as HTMLElement | null;
    if(toggle !== null && toggle =='user' )
    {
      if(loggedIn != null){
        loggedIn.style.display = 'none'
      }
    }else{
      if (loggedIn != null) {
        loggedIn.style.display = 'none';
      }
    }

  }

}
