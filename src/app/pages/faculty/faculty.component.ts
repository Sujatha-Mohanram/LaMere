import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgControl } from '@angular/forms';


import { FacultyService } from 'src/app/shared/faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers: [ FacultyService]

})
export class FacultyComponent extends BasePageComponent  implements OnInit {

  constructor(route:ActivatedRoute,public facultyService: FacultyService) {
    super(route);
    
  }

   override ngOnInit(): void {
  }

}
