import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { colRef,db } from '../../shared/firebase-config';
import {
  getAuth, createUserWithEmailAndPassword, signOut,
  signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser
} from 'firebase/auth'
import { timestamp } from 'rxjs';
import { collection, doc, getDoc } from 'firebase/firestore';
import { UntypedFormBuilder } from '@angular/forms';
import { identifierName } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasePageComponent implements OnInit {
email !:string;
username !:string;

  constructor(route: ActivatedRoute) {
    super(route);
  }

  override ngOnInit(): void {
    this.userStateChange();
  }


  userStateChange(){
    const auth = getAuth();
    let email: string='';
    onAuthStateChanged(auth,(user)=>{
      const userdetails = document.querySelector('#userdetails') as HTMLElement | null;
      const onlyloggedIn = document.querySelector('#onlyloggedIn') as HTMLElement | null;
      const nouser = document.querySelector('#nouser') as HTMLElement | null;
      if(user)
      {
        
      
        
                
        if(userdetails != null){
          if(onlyloggedIn !==null)
          onlyloggedIn.style.display = 'block'
          if(userdetails != null)
         userdetails.style.display ='block'
        const usersnap= getDoc(doc(collection(db,'users'),user.uid)).then((doc)=>{
          
          if(doc!=undefined){
          let  snap = doc.get('username');
          this.username = snap;
          if(user.email)
          this.email = user.email;
          console.log(snap);
          //if(snap!=undefined)
          //userdetails.innerHTML = `<td width='33%'>${ snap}</td><td width='33%'>${user.email}</td><td width='33%'>${ snap}</td>`;
          }
        })
         
          if(nouser!==null)
          nouser.style.display = 'none';
        }
        console.log('user is logged in'+ user.email);
      }
      else{
       
        if(onlyloggedIn != null){
         onlyloggedIn.style.display = 'none';
        }
         if(userdetails != null)
         userdetails.style.display ='none'
         if(nouser != null){
          nouser.style.display = 'block'
          nouser.innerHTML = `Please Login to do administrative functions`;
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

}
