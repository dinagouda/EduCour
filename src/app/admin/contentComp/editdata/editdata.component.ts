import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentdetailsService } from 'app/services/studentdetails.service';
import { TestService } from 'app/services/test.service';
import { IItem } from '../../../interfaces/IItem';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})

export class EditdataComponent implements OnInit {
 

  id:number;
  name: string;
  address:string;
  phoneNumber:string;
  imgPath:string;
  myitem: IItem





  constructor(
    private studentdetailsservice:StudentdetailsService ,
    private service:TestService,
    private router: Router,
    private http:HttpClient ) { 
   


  }

  ngOnInit(): void {
    var details=this.studentdetailsservice.getItems()[0];
    this.id=details.id;
    this.name = details.name;
    this.address = details.address;
    this.phoneNumber = details.phoneNumber;
    this.imgPath=details.imgPath;
    console.log(details);

  }



  edit () {
    var y: number = +this.id;

    this.myitem={
      id:y,
      name:this.name,
      address:this.address,
      phoneNumber:this.phoneNumber,
      imgPath:this.imgPath,
     
    }

    console.log(typeof this.myitem.id);
// var obj = {"id":11,"name":"aaaaa","address":"hjhjh","phoneNumber":"9797979","imgPath":null}
return  this.http.put('https://localhost:5001/api/Users/PutUser/' + y,this.myitem).subscribe(res=>{

});
}

}
