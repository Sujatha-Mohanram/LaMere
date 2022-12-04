import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';


import { Student } from 'src/app/shared/student.model'; 
import { StudentService } from 'src/app/shared/student.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [ StudentService]

})
export class StudentsComponent extends BasePageComponent implements OnInit {

  constructor(route:ActivatedRoute,public studentService: StudentService) {
    super(route);
    
  }

   override ngOnInit(): void {
    this.resetForm();
    this.refreshStudentList();
  }

  resetForm(form?: NgForm){
    if(form)
    form.reset();
    this.studentService.selectedStudent={
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
      this.studentService.putStudent(form.value);
      this.resetForm(form);
      this.refreshStudentList();
     // M.toast({html:'Saved Successfully', classes:'rounded'});
   
  }
  else{
    
    this.studentService.postStudent(form.value);
    this.resetForm(form);
    this.refreshStudentList();
     // M.toast({html:'Updated Successfully', classes:'rounded'});
    
  }
  }

   refreshStudentList()
  {
    this.studentService.students = this.studentService.getStudentList();
   
  }

  onEdit(stu: Student)
  {
    this.studentService.editStudent(stu._id);
    this.studentService.selectedStudent = stu;
  }

  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure to delete this record ?') == true ) {
      console.log('deleting'+_id);
      this.studentService.deleteStudent(_id)
      this.refreshStudentList();
      this.resetForm(form);
        //M.toast({html:"Deleted successfully",classes:'rounded'});
    
    }
  }

}