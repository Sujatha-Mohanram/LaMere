import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { db ,colRefSubject} from './firebase-config';
import {
  getFirestore, collection, getDocs, onSnapshot,
  addDoc, deleteDoc, doc, query, where, orderBy,serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'



import { Subject } from './subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  selectedSubject!: Subject;
  subjects!: Subject[];
  readonly baseurl =   'https://lamere-fefef-default-rtdb.firebaseio.com/faculty.json';//'http://localhost:3000/faculty';//'http://localhost:3000/faculty';

  constructor(private http: HttpClient) { }

  postSubject(sub: Subject)
  {
    const timestamp = serverTimestamp();
   
      addDoc(colRefSubject,sub)
      .then(()=>{
      this.selectedSubject != null;
      })
    return this.subjects;//this.http.post(this.baseurl,fac);
  }

   getSubjectList()
  {
    
    onSnapshot(colRefSubject,(snapshot)=>{
      let subjects: any[] = [];
        snapshot.docs.forEach((doc)=>{
            subjects.push({...doc.data(),_id:doc.id});
        });
        this.subjects = subjects;
        console.log(subjects);

    })
        return this.subjects;// this.http.get(this.baseurl);
  }

  putSubject(sub: Subject){
    const docRef = doc(db,'subject',sub._id);
    updateDoc(docRef,{
      name: sub.name,
      year: sub.year,
      date: sub.date,
      time: sub.time
           
    }).then(()=>{
      this.selectedSubject == null;
      });
      /*addDoc(colRef,fac)
      .then(()=>{
      this.selectedFaculty == null;
      });*/


    return this.subjects;//this.http.put(this.baseurl+'/${fac._id}', fac);
  }

  deleteSubject(id: string){
    
    const docRef = doc(db,'subject',id);
    deleteDoc(docRef)
    .then(()=>{
      this.selectedSubject == null;
    });
    return //this.http.delete(this.baseurl+'/${_id}');

  }

  searchSubject(w: string){
    const q = query(colRefSubject, where("firstname","==","sujatha"), orderBy('firstname'));

    onSnapshot(q,(snapshot)=>{
      let subjects: any[] = [];
        snapshot.docs.forEach((doc)=>{
            subjects.push({...doc.data(),_id:doc.id});
        })
        this.subjects = this.subjects;
        console.log(subjects);

    })
    
  }

  editSubject(id:string){
    const docRef = doc(db,'subject',id);
    let sub = Subject;
    
    onSnapshot(docRef,(doc)=>{
      sub = <any>doc.data;
      console.log(doc.data(),doc.id);
    })
    this.selectedSubject =<any>sub;
  }
}