import { Routes } from '@angular/router';

import { DashboardComponent } from '../../admin/contentComp/dashboard/dashboard.component';
import { SubjectComponent } from '../../admin/contentComp/subject/subject.component';
import { StudentsComponent } from '../../admin/contentComp/students/students.component';
import { TeacherComponent } from '../../admin/contentComp/teacher/teacher.component';
import { TeacherRequestComponent } from '../../admin/contentComp/teacherRequest/teacherRequest.component';
import { ProfileComponent } from '../../admin/contentComp/profile/profile.component';
import {DetailstudenteprofileComponent}      from '../../admin/contentComp/detailstudenteprofile/detailstudenteprofile.component';
import {DetailsubjectprofileComponent}      from '../../admin/contentComp/detailsubjectprofile/detailsubjectprofile.component';
import {DetailteachereprofileComponent}      from '../../admin/contentComp/detailteachereprofile/detailteachereprofile.component';
import {DetailsComponent}      from '../../admin/contentComp/details/details.component';
import {DetailrequestprofileComponent}      from '../../admin/contentComp/detailrequestprofile/detailrequestprofile.component';
import {SignupstudntComponent} from '../../admin/contentComp/signupstudnt/signupstudnt.component';
import {EditdataComponent} from '../../admin/contentComp/editdata/editdata.component';
import {AcademicyearComponent} from '../../admin/contentComp/academicyear/academicyear.component';
import {CollegeyearComponent} from '../../admin/contentComp/collegeyear/collegeyear.component';
import {ProfilecolleageComponent} from '../../admin/contentComp/profilecolleage/profilecolleage.component';



export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'subject',           component: SubjectComponent },
    { path: 'students',          component: StudentsComponent },
    { path: 'teacher',           component: TeacherComponent },
    { path: 'teacherRequest',  component: TeacherRequestComponent },
    { path: 'profile',  component: ProfileComponent },
    {path: 'detailstudentprofile' ,component:DetailstudenteprofileComponent},
    {path: 'detailsubjectprofile' ,component:DetailsubjectprofileComponent},
    {path: 'detailteacherprofile' ,component:DetailteachereprofileComponent},
    {path: 'details' ,component:DetailsComponent},
    {path: 'detailrequestprofile' ,component:DetailrequestprofileComponent},
    {path: 'SignupstudntComponent' ,component:SignupstudntComponent},
    {path:'Editdata' ,component:EditdataComponent},
    {path:'AcademicyearComponent' ,component:AcademicyearComponent},
    {path:'CollegeyearComponent' ,component:CollegeyearComponent},
    {path:'Profilecolleage' ,component:ProfilecolleageComponent},

    





    
  
];
