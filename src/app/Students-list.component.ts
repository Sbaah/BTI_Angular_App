import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { DataModelManagerService } from "./data-model-manager.service";
import { ReqresStudents } from "./data-model-classes";

@Component({
  selector: 'app-Students-list',
  templateUrl: './Students-list.component.html',
  styleUrls: ['./Students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  // reqres.in web service data
  Students: ReqresStudents[];
  Student: ReqresStudents;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {

    // Get all Students
    // The collection of Students is in the "data" property
    this.m.reqresStudentsGetAll().subscribe(u => this.Students = u.data);
  }

}
