import { Component, OnInit, Output  } from '@angular/core';
import { Router } from '@angular/router';
import { StudentdetailsService } from 'app/services/studentdetails.service';
import { event } from 'jquery';
import { IItem } from '../../../interfaces/IItem';
import { TestService } from '../../../services/test.service';

@Component({
    selector: 'students-cmp',
    moduleId: module.id,
    templateUrl: 'students.component.html'
})

export class StudentsComponent implements OnInit {
    constructor(private service:TestService , private studentdetailsservice:StudentdetailsService,private router: Router) { }


ngOnInit(){
this.service.getAll();

    

}
ngOnChange(){
    this.service.getAll();


}
// send the data to the details profile using service
 senddata(event){
  
  const currentItem:IItem = {
    id: event.target.id,
    name:event.target.name,
    address:document.getElementById("address").innerHTML,
    phoneNumber:document.getElementById("phone").innerHTML,
    imgPath:""
    
};
this.studentdetailsservice.addItem(currentItem);
console.log(currentItem);
// this.router.navigate(["/DetailstudenteprofileComponent"]);
this.router.navigate(["/detailstudentprofile"])


}


// open the signup form 
signup(){
    this.router.navigate(["/SignupstudntComponent"])

}
}
