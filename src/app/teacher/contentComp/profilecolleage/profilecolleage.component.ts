import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilecolleage',
  templateUrl: './profilecolleage.component.html',
  styleUrls: ['./profilecolleage.component.css']
})
export class ProfilecolleageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  addcol (){
    this.router.navigate(["/CollegeyearComponent"]);

  }

}
