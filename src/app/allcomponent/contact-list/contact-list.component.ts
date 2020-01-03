import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  {data} from 'contacts.json';
import { JsonService } from 'src/app/json.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  data :{} [] = data;
  serviceData:any;
  htmlData:any;
  constructor(private routnav:Router, jsonService:JsonService ) {
    this.serviceData = jsonService.getJson(data);
    this.htmlData = jsonService.getAllData();
   }

  ngOnInit() {
  }
  backtoform(){
    this.routnav.navigate(['/addcontact'])


  }
  
  }

