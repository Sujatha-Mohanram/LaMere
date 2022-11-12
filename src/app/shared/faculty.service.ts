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

  constructor() { }
}
