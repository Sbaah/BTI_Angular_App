// Write classes or interfaces that describe the shape
// of the data to-and-from the web service

// For example...
/*
export class Product {
  id: number;
  name: string;
  // etc.
}
*/

// reqres.in data shapes

// Students 
export class ReqresStudents {
  id: number;
  givenName: string;
  familyName: string;
  credits:[]
}

// Package that delivers a collection of Students
export class ReqresStudentsCollectionPackage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: ReqresStudents[];
}

// Package that delivers one Students
export class ReqresStudentsinglePackage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: ReqresStudents;
}

// Package that delivers Course_Single one user
export class ReqresCourseSinglePackage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: ReqresCourse;
}


// Packaging for "add new" request
// NOTICE...
// The same package works for the "edit existing" request
export class ReqresStudentsCreate {
  name: string;
  job: string;
}

// Response from "add new" POST request
// NOTICE...
// The same package works for the "edit existing" request, 
// except that the web service does NOT return the "id" value,
// which is why it has been configured (below) as optional
export class ReqresStudentsCreateResponse {
  _id?: number;
  name: string;
  job: string;
  createdAt: string;  // ISO8601 date and time string
}

//Aviliable Courses
export class ReqresCourse
{
  _id?: string;
    courseId: number;
    term: string;
    academicProgram: string;
    level: number;
    prerequisite: [string];
    courseCode: string;
    section: string;
    termSectionId: number;
    enrolCapacity: number;
    enrolTotal: number;
    room: string;
    roomCapacity: number;
    classStart: string;
    classEnd: string;
    classMon: string;
    classTue: string;
    classWed: string;
    classThu: string;
    classFri: string;
    dateStart: string;
    dateEnd: string;
    professor: string;
}

//// Package that delivers a collection of Classes
export class ReqresCourseCollectionPackage {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data: ReqresCourse[];
}