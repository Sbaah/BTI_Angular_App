import { Component, OnInit } from '@angular/core';

import { DataModelManagerService } from "./data-model-manager.service";
import { ReqresStudents } from "./data-model-classes";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // reqres.in web service data
  Students: ReqresStudents[];
  Student: ReqresStudents;

  constructor(private m: DataModelManagerService) { 

    // Create a new empty Students to suppress console error messages
    // while we are waiting for data from the web service
    //this.Students = new ReqresStudents();
  }

  ngOnInit() {

    // Get all Students
    // The collection of Students is in the "data" property
    this.m.reqresStudentsGetAll().subscribe(u => this.Students = u.data);

    // Get one Students, with identifier 5
    // The Students is in the "data" property
    this.m.reqresStudentsGetById(5).subscribe(u => this.Student = u.data);
  }

}
