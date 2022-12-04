import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { db ,colRefClass} from './firebase-config';
import {
  getFirestore, collection, getDocs, onSnapshot,
  addDoc, deleteDoc, doc, query, where, orderBy,serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'



import { Class } from './class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  selectedClass!: Class;
  classes!: Class[];
  readonly baseurl =   'https://lamere-fefef-default-rtdb.firebaseio.com/faculty.json';//'http://localhost:3000/faculty';//'http://localhost:3000/faculty';

  constructor(private http: HttpClient) { }

  postClass(clas: Class)
  {
    const timestamp = serverTimestamp();
   
      addDoc(colRefClass,clas)
      .then(()=>{
      this.selectedClass != null;
      })
    return this.classes;//this.http.post(this.baseurl,fac);
  }

   getClassList()
  {
    
    onSnapshot(colRefClass,(snapshot)=>{
      let classes: any[] = [];
        snapshot.docs.forEach((doc)=>{
            classes.push({...doc.data(),_id:doc.id});
        });
        this.classes = classes;
        console.log(classes);

    })
        return this.classes;// this.http.get(this.baseurl);
  }

  putClass(clas: Class){
    const docRef = doc(db,'class',clas._id);
    updateDoc(docRef,{
      year: clas.year,
      date: clas.date,
      time: clas.time,
      frequency: clas.frequency
           
    }).then(()=>{
      this.selectedClass == null;
      });
      /*addDoc(colRef,fac)
      .then(()=>{
      this.selectedFaculty == null;
      });*/


    return this.classes;//this.http.put(this.baseurl+'/${fac._id}', fac);
  }

  deleteClass(id: string){
    
    const docRef = doc(db,'class',id);
    deleteDoc(docRef)
    .then(()=>{
      this.selectedClass == null;
    });
    return //this.http.delete(this.baseurl+'/${_id}');

  }

  searchClass(w: string){
    const q = query(colRefClass, where("firstname","==","sujatha"), orderBy('firstname'));

    onSnapshot(q,(snapshot)=>{
      let classes: any[] = [];
        snapshot.docs.forEach((doc)=>{
            classes.push({...doc.data(),_id:doc.id});
        })
        this.classes = this.classes;
        console.log(classes);

    })
    
  }

  editClass(id:string){
    const docRef = doc(db,'class',id);
    let clas = Class;
    
    onSnapshot(docRef,(doc)=>{
      clas = <any>doc.data;
      console.log(doc.data(),doc.id);
    })
    this.selectedClass =<any>clas;
  }
}