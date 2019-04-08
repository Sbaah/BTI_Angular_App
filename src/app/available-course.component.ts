import { Component, OnInit } from '@angular/core';
import { DataModelManagerService } from "./data-model-manager.service";
import { ReqresCourse } from "./data-model-classes";

@Component({
  selector: 'app-available-course',
  templateUrl: './available-course.component.html',
  styles: []
})
export class AvailableCourseComponent implements OnInit {
  courses: ReqresCourse[];
  course: ReqresCourse;
  
  constructor(private m: DataModelManagerService) { }
  ngOnInit() { 
    this.m.reqresCourseGetAll().subscribe(u => this.courses = u.data);
   }

}
