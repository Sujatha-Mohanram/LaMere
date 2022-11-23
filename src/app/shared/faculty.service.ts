import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



import { Faculty } from './faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  selectedFaculty!: Faculty;
  faculties!: Faculty[];
  readonly baseurl =  'https://lamere-fefef-default-rtdb.firebaseio.com/faculty.json';//'http://localhost:3000/faculty';

  constructor(private http: HttpClient) { }

  postFaculty(fac: Faculty)
  {
    return this.http.post(this.baseurl,fac);
  }

  getFacultyList()
  {
    return this.http.get(this.baseurl);
  }

  putFaculty(fac: Faculty){
    return this.http.put(this.baseurl+'/${fac._id}', fac);
  }

  deleteFaculty(id: string){
    return this.http.delete(this.baseurl+'/${_id}');

  }
}
