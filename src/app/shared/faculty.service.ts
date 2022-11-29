import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { colRef,db } from './firebase-config';
import {
  getFirestore, collection, getDocs, onSnapshot,
  addDoc, deleteDoc, doc, query, where, orderBy,serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'



import { Faculty } from './faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  selectedFaculty!: Faculty;
  faculties!: Faculty[];
  readonly baseurl =   'https://lamere-fefef-default-rtdb.firebaseio.com/faculty.json';//'http://localhost:3000/faculty';//'http://localhost:3000/faculty';

  constructor(private http: HttpClient) { }

  postFaculty(fac: Faculty)
  {
    const timestamp = serverTimestamp();
   
      addDoc(colRef,fac)
      .then(()=>{
      this.selectedFaculty != null;
      })
    return this.faculties;//this.http.post(this.baseurl,fac);
  }

   getFacultyList()
  {
    
    onSnapshot(colRef,(snapshot)=>{
      let faculties: any[] = [];
        snapshot.docs.forEach((doc)=>{
            faculties.push({...doc.data(),_id:doc.id});
        });
        this.faculties = faculties;
        console.log(faculties);

    })
        return this.faculties;// this.http.get(this.baseurl);
  }

  putFaculty(fac: Faculty){
    const docRef = doc(db,'faculty',fac._id);
    updateDoc(docRef,{
      firstname: fac.firstname,
      lastname: fac.lastname,
      email: fac.email,
      schoolid: fac.schoolid,
      password: fac.password,
      datecreated: fac.datecreated,
      
    }).then(()=>{
      this.selectedFaculty == null;
      });
      /*addDoc(colRef,fac)
      .then(()=>{
      this.selectedFaculty == null;
      });*/


    return this.faculties;//this.http.put(this.baseurl+'/${fac._id}', fac);
  }

  deleteFaculty(id: string){
    
    const docRef = doc(db,'faculty',id);
    deleteDoc(docRef)
    .then(()=>{
      this.selectedFaculty == null;
    });
    return //this.http.delete(this.baseurl+'/${_id}');

  }

  searchFaculty(w: string){
    const q = query(colRef, where("firstname","==","sujatha"), orderBy('firstname'));

    onSnapshot(q,(snapshot)=>{
      let faculties: any[] = [];
        snapshot.docs.forEach((doc)=>{
            faculties.push({...doc.data(),_id:doc.id});
        })
        this.faculties = faculties;
        console.log(faculties);

    })
    
  }

  editFaculty(id:string){
    const docRef = doc(db,'faculty',id);
    let fac = Faculty;
    
    onSnapshot(docRef,(doc)=>{
      fac = <any>doc.data;
      console.log(doc.data(),doc.id);
    })
    this.selectedFaculty =<any>fac;
  }
}