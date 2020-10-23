import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from 'app/services/test.service';
import { Students } from '../../../interfaces/students';

@Component({
  selector: 'app-signupstudnt',
  templateUrl: './signupstudnt.component.html',
  styleUrls: ['./signupstudnt.component.css']
})
export class SignupstudntComponent implements OnInit {

  name: string;
  address:string;
  phoneNumber:string;
  student: Students

  constructor(private service:TestService ,private router: Router ) { }

  ngOnInit(): void {

   
  }
  signup(){
    this.student={
      name:this.name,
      address:this.address,
      phoneNumber:this.phoneNumber,
     
    }
    this.service.postuser(this.student).subscribe(res=>{
      this.service.getAll()
      this.router.navigate(["/icons"])

    },
    err=>{
      console.log(err)
    })
  }
  

}
