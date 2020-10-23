import { Routes } from '@angular/router';

import { HomeComponent } from '../../teacher/contentComp/home/home.component';
import { StudentsComponent } from '../../teacher/contentComp/students/students.component';
import { AssistantComponent } from '../../teacher/contentComp/assistant/assistant.component';
import { AssistantrequestsComponent } from '../../teacher/contentComp/assistantrequests/assistantrequests.component';
import { SubjectComponent } from '../../teacher/contentComp/subject/subject.component';
import { ProfileComponent } from '../../teacher/contentComp/profile/profile.component';
import {ProfilecolleageComponent}      from '../../teacher/contentComp/profilecolleage/profilecolleage.component';




export const TeacherLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'students',           component: StudentsComponent },
    { path: 'assistants',          component: AssistantComponent },
    { path: 'assistantrequest',           component: AssistantrequestsComponent },
    { path: 'subject',  component: SubjectComponent },
    { path: 'profile',  component: ProfileComponent },
    {path: 'Profilecolleage' ,component:ProfilecolleageComponent},
   

    





    
  
];
