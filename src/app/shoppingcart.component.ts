import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "./data-model-manager.service";
import { ReqresStudents } from "./data-model-classes";


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styles: []
})
export class ShoppingcartComponent implements OnInit {

    // reqres.in web service data
    Students: ReqresStudents[];
    Student: ReqresStudents;
  

  constructor(private m: DataModelManagerService, private route: ActivatedRoute) { }

  ngOnInit() {

      // Get the route parameter
      let id = this.route.snapshot.params['id'];

      // Get one Students, with identifier from above
    // The Students is in the "data" property
    this.m.reqresStudentsGetById(id).subscribe(u => {this.Student = u.data; console.log( u.data);});

   // this.m.reqresCourseGetAll().subscribe(u => this.courses = u.data);
   this.m.reqresCourseGetAll();

  }
/*
  prerObtained(courseCode: String[]): boolean {
    var count = 0;
    for (let course in courseCode) {
      for(var i = 0; i < this.Student.credits.length; i++) {
        if(this.Student.credits[i].courseCode == course) {
          count++;
        }
      }
    }
    if(count == courseCode.length) {
      return true;
    }
    return false;
  }

  courseMatch(): void {
   this.coursesMatched = this.coursesPossible.filter(course => {
      return course.enrolTotal < 4 && this.prerObtained(course.prerequisite); 
    });
  }
*/
}
