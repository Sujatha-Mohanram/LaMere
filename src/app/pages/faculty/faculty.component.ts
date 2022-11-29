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
    const id =form.value._id;
    console.log(form.value._id);
    if(id !=null && id.length>0){
      this.facultyService.putFaculty(form.value);
      this.resetForm(form);
      this.refreshFacultyList();
     // M.toast({html:'Saved Successfully', classes:'rounded'});
   
  }
  else{
    
    this.facultyService.postFaculty(form.value);
    this.resetForm(form);
    this.refreshFacultyList();
     // M.toast({html:'Updated Successfully', classes:'rounded'});
    
  }
  }

   refreshFacultyList()
  {
    this.facultyService.faculties = this.facultyService.getFacultyList();
   
  }

  onEdit(fac: Faculty)
  {
    this.facultyService.editFaculty(fac._id);
    this.facultyService.selectedFaculty = fac;
  }

  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure to delete this record ?') == true ) {
      console.log('deleting'+_id);
      this.facultyService.deleteFaculty(_id)
      this.refreshFacultyList();
      this.resetForm(form);
        //M.toast({html:"Deleted successfully",classes:'rounded'});
    
    }
  }

}
