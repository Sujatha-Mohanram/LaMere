import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { StudentsComponent } from './pages/students/students.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BasePageComponent } from './partials/base-page/base-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FacultyComponent,
    StudentsComponent,
    SubjectsComponent,
    ClassesComponent,
    ContactComponent,
    BasePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
