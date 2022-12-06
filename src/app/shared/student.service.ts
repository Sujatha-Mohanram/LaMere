import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { db ,colRefStudent} from './firebase-config';
import {
  getFirestore, collection, getDocs, onSnapshot,
  addDoc, deleteDoc, doc, query, where, orderBy,serverTimestamp,
  getDoc, updateDoc
} from 'firebase/firestore'



import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  selectedStudent!: Student;
  students!: Student[];
  readonly baseurl =   'https://lamere-fefef-default-rtdb.firebaseio.com/faculty.json';//'http://localhost:3000/faculty';//'http://localhost:3000/faculty';

  constructor(private http: HttpClient) { }

  postStudent(stu: Student)
  {
    const timestamp = serverTimestamp();
   
      addDoc(colRefStudent,stu)
      .then(()=>{
      this.selectedStudent != null;
      })
    return this.students;//this.http.post(this.baseurl,fac);
  }

   getStudentList()
  {
    
    onSnapshot(colRefStudent,(snapshot)=>{
      let students: any[] = [];
        snapshot.docs.forEach((doc)=>{
            students.push({...doc.data(),_id:doc.id});
        });
        this.students = students;
        console.log(students);

    })
        return this.students;// this.http.get(this.baseurl);
  }

  putStudent(stu: Student){
    const docRef = doc(db,'student',stu._id);
    updateDoc(docRef,{
      firstname: stu.firstname,
      lastname: stu.lastname,
      email: stu.email,
      schoolid: stu.schoolid,
      password: stu.password,
      datecreated: stu.datecreated,
      
    }).then(()=>{
      this.selectedStudent == null;
      });
      /*addDoc(colRef,fac)
      .then(()=>{
      this.selectedFaculty == null;
      });*/


    return this.students;//this.http.put(this.baseurl+'/${fac._id}', fac);
  }

  deleteStudent(id: string){
    
    const docRef = doc(db,'student',id);
    deleteDoc(docRef)
    .then(()=>{
      this.selectedStudent == null;
    });
    return //this.http.delete(this.baseurl+'/${_id}');

  }

  searchStudent(w: string){
    const q = query(colRefStudent, where("firstname","==","sujatha"), orderBy('firstname'));

    onSnapshot(q,(snapshot)=>{
      let students: any[] = [];
        snapshot.docs.forEach((doc)=>{
            students.push({...doc.data(),_id:doc.id});
        })
        this.students = students;
        console.log(students);

    })
    
  }

  editStudent(id:string){
    const docRef = doc(db,'student',id);
    let stu = Student;
    
    onSnapshot(docRef,(doc)=>{
      stu = <any>doc.data;
      console.log(doc.data(),doc.id);
    })
    this.selectedStudent =<any>stu;
  }
}