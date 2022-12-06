import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';


import { Class } from 'src/app/shared/class.model'; 
import { ClassService } from 'src/app/shared/class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
  providers: [ ClassService]
})
export class ClassesComponent extends BasePageComponent implements OnInit {

  constructor(route:ActivatedRoute,public classService: ClassService) {
    super(route);
    
  }

   override ngOnInit(): void {
    this.resetForm();
    this.refreshClassList();
  }

  resetForm(form?: NgForm){
    if(form)
    form.reset();
    this.classService.selectedClass={
      _id: "",
      year:"",
      date:"",
      time:"",
      frequency:""
    }
  }

  onSubmit(form: NgForm)
  {
    const id =form.value._id;
    console.log(form.value._id);
    if(id !=null && id.length>0){
      this.classService.putClass(form.value);
      this.resetForm(form);
      this.refreshClassList();
     // M.toast({html:'Saved Successfully', classes:'rounded'});
   
  }
  else{
    
    this.classService.postClass(form.value);
    this.resetForm(form);
    this.refreshClassList();
     // M.toast({html:'Updated Successfully', classes:'rounded'});
    
  }
  }

   refreshClassList()
  {
    this.classService.classes = this.classService.getClassList();
   
  }

  onEdit(clas: Class)
  {
    this.classService.editClass(clas._id);
    this.classService.selectedClass = clas;
  }

  onDelete(_id: string, form: NgForm){
    if(confirm('Are you sure to delete this record ?') == true ) {
      console.log('deleting'+_id);
      this.classService.deleteClass(_id)
      this.refreshClassList();
      this.resetForm(form);
        //M.toast({html:"Deleted successfully",classes:'rounded'});
    
    }
  }

}
