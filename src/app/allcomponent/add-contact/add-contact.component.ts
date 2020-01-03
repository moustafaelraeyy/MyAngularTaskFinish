import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from 'src/app/json.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  data:any;
  service:any;
  constructor(private routnav: Router, jsonService:JsonService ) { 
    this.data = jsonService.getAllData();
    this.service = jsonService;
 
  }

  ngOnInit() {
  }
  
  creat(form) {
    this.service.getNewObject({
      "userId": null,
      "email": form.value.email,
      "userName": null,
      "mobileNumber": null,
      "firstName": form.value.Firstname,
      "lastName": form.value.Lastname
  });
  this.routnav.navigate(['/'])

  }
  gotolist() {
    
    this.routnav.navigate(['/'])
  }

}
