import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent }       from '../../admin/contentComp/dashboard/dashboard.component';
import { SubjectComponent }            from '../../admin/contentComp/subject/subject.component';
import { StudentsComponent }           from '../../admin/contentComp/students/students.component';
import { TeacherComponent }            from '../../admin/contentComp/teacher/teacher.component';
import { TeacherRequestComponent }   from '../../admin/contentComp/teacherRequest/teacherRequest.component';
import {DetailstudenteprofileComponent}      from '../../admin/contentComp/detailstudenteprofile/detailstudenteprofile.component';
import {DetailsubjectprofileComponent}      from '../../admin/contentComp/detailsubjectprofile/detailsubjectprofile.component';
import {DetailteachereprofileComponent}      from '../../admin/contentComp/detailteachereprofile/detailteachereprofile.component';
import {DetailsComponent}      from '../../admin/contentComp/details/details.component';
import {DetailrequestprofileComponent}      from '../../admin/contentComp/detailrequestprofile/detailrequestprofile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupstudntComponent } from 'app/admin/contentComp/signupstudnt/signupstudnt.component';
import {EditdataComponent} from 'app/admin/contentComp/editdata/editdata.component';
import {AcademicyearComponent} from 'app/admin/contentComp/academicyear/academicyear.component';
import {CollegeyearComponent} from 'app/admin/contentComp/collegeyear/collegeyear.component';
import {ProfilecolleageComponent} from 'app/admin/contentComp/profilecolleage/profilecolleage.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    SubjectComponent,
    DetailstudenteprofileComponent,
    StudentsComponent,
    TeacherComponent,
    TeacherRequestComponent,
    DetailsubjectprofileComponent,
    DetailteachereprofileComponent,
    DetailsComponent,
    DetailrequestprofileComponent,
    SignupstudntComponent,
    EditdataComponent,
    AcademicyearComponent,
    CollegeyearComponent,
    ProfilecolleageComponent,
    


  ]
})

export class AdminLayoutModule {}
