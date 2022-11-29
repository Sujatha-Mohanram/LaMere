import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './pages/classes/classes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent,data: {'title': 'Home'}},
  {path: 'faculty', component: FacultyComponent, data: {'title': 'Faculty'}},
  {path: 'students', component: StudentsComponent, data: {'title': 'Students'}},
  {path: 'subjects', component: SubjectsComponent, data: {'title': 'Subjects'}},
  {path: 'classes', component: ClassesComponent, data: {'title': 'Classes'}},
  {path: 'contact', component: ContactComponent, data: {'title': 'Contact'}},
  {path: 'login', component: LoginComponent, data: {'title': 'Login'}},
  {path: 'register', component: RegisterComponent, data: {'title': 'Register'}},
  {path: '', redirectTo:'/home',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
