import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherLayoutRoutes } from './teacher-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from '../../teacher/contentComp/home/home.component';
import { StudentsComponent } from '../../teacher/contentComp/students/students.component';
import { AssistantComponent } from '../../teacher/contentComp/assistant/assistant.component';
import { AssistantrequestsComponent } from '../../teacher/contentComp/assistantrequests/assistantrequests.component';
import { SubjectComponent } from '../../teacher/contentComp/subject/subject.component';
import { ProfileComponent } from '../../teacher/contentComp/profile/profile.component';
import {ProfilecolleageComponent}      from '../../teacher/contentComp/profilecolleage/profilecolleage.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TeacherLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    StudentsComponent,
    AssistantComponent,
    AssistantrequestsComponent,
    SubjectComponent,
    ProfileComponent,
    ProfilecolleageComponent






    


  ]
})

export class TeacherLayoutModule {}
