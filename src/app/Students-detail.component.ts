import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "./data-model-manager.service";
import { ReqresStudents } from "./data-model-classes";

@Component({
  selector: 'app-Students-detail',
  templateUrl: './Students-detail.component.html',
  styleUrls: ['./Students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit {

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
   
    ////stuff to select/remember to add to student chart... students-detail.components.ts
    //this.m.currentStudent =this.currentStudent;
  }

}
