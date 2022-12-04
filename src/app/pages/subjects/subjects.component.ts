import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';


import { Subject } from 'src/app/shared/subject.model'; 
import { SubjectService } from 'src/app/shared/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
  providers: [ SubjectService]
})
export class SubjectsComponent extends BasePageComponent implements OnInit {
 
  constructor(route:ActivatedRoute,public subjectService: SubjectService) {
    super(route);
    
  }

   override ngOnInit(): void {
    this.resetForm();
    this.refreshSubjectList();
  }

  resetForm(form?: NgForm){
    if(form)
    form.reset();
    this.subjectService.selectedSubject={
      _id: "",
      name:"",
      year:"",
      date:"",
      time:""
    }
  }

  onSubmit(form: NgForm)
  {
    const id =form.value._id;
    console.log(form.value._id);
    if(id !=null && id.length>0){
      this.subjectService.putSubject(form.value);
      this.resetForm(form);
      this.refreshSubjectList();
     // M.toast({html:'Saved Successfully', classes:'rounded'});
   
  }
  else{
    
    this.subjectService.postSubject(form.value);
    this.resetForm(form);
    this.refreshSubjectList();
     // M.toast({html:'Updated Successfully', classes:'rounded'});
    
  }
  }

   refreshSubjectList()
  {
    this.subjectService.subjects = this.subjectService.getSubjectList();
   
  }

  onEdit(sub: Subject)
  {
    this.subjectService.editSubject(sub._id);
    this.subjectService.selectedSubject = sub;
  }

  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure to delete this record ?') == true ) {
      console.log('deleting'+_id);
      this.subjectService.deleteSubject(_id)
      this.refreshSubjectList();
      this.resetForm(form);
        //M.toast({html:"Deleted successfully",classes:'rounded'});
    
    }
  }

}
