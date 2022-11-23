import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';


import { Faculty } from 'src/app/shared/faculty.model'; 
import { FacultyService } from 'src/app/shared/faculty.service';

declare var M: any;
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
    this.resetForm();
    this.refreshFacultyList();
  }

  resetForm(form?: NgForm){
    if(form)
    form.reset();
    this.facultyService.selectedFaculty={
      _id: "",
      firstname:"",
      lastname:"",
      schoolid:0,
      email:"",
      password:"",
      datecreated:"",
      avtar:""
    }
  }

  onSubmit(form: NgForm)
  {
    if(form.value._id ==""){
    this.facultyService.postFaculty(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshFacultyList();
      M.toast({html:'Saved Successfully', classes:'rounded'});
    });
  }
  else{
    this.facultyService.putFaculty(form.value).subscribe((res)=>{
      this.resetForm(form);
      this.refreshFacultyList();
      M.toast({html:'Updated Successfully', classes:'rounded'});
    });
  }
  }

  refreshFacultyList()
  {
    this.facultyService.getFacultyList().subscribe((res)=>{
      //this.facultyService.faculties=res as Faculty[];
      this.facultyService.faculties=Object.values(res);
    })
  }

  onEdit(fac: Faculty)
  {
    this.facultyService.selectedFaculty = fac;
  }

  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure to delete this record ?') == true ) {
      console.log('deleting');
      this.facultyService.deleteFaculty(_id).subscribe((res)=>{
        this.refreshFacultyList();
        this.resetForm(form);
        M.toast({html:"Deleted successfully",classes:'rounded'});
      });
    }
  }

}
