import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from 'app/services/studentdetails.service';
import { TestService } from 'app/services/test.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-detailstudenteprofile',
  templateUrl: './detailstudenteprofile.component.html',
  styleUrls: ['./detailstudenteprofile.component.css']
})
export class DetailstudenteprofileComponent implements OnInit {


  id:number;
  name: string;
  address:string;
  phoneNumber:string;
  imgPath:string;
  
  
  constructor(private studentdetailsservice:StudentdetailsService , private service:TestService ,private router: Router) {
 

   }

  ngOnInit(): void {
    var details=this.studentdetailsservice.getItems()[0];
    this.id=details.id;
    this.name = details.name;
    this.address = details.address;
    this.phoneNumber = details.phoneNumber;
    this.imgPath=details.imgPath;
  
    // document.getElementById("user_name").innerHTML=this.name;

  }
  

  dele(){
    var details=this.studentdetailsservice.getItems();
    console.log(details[0].id);
    this.service.delete(details[0].id).subscribe(res=>{
      
      this.router.navigate(["/icons"])
    
    })
  }

  
  edit(){
  
      
      this.router.navigate(["/Editdata"])
    
  }


}

