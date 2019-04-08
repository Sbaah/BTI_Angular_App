import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// Updated...
import { Observable, of } from 'rxjs';
// New...
import { catchError, tap } from "rxjs/operators";

import { ReqresStudents, ReqresStudentsCollectionPackage, ReqresStudentsinglePackage, ReqresStudentsCreate, ReqresStudentsCreateResponse ,ReqresCourse,ReqresCourseCollectionPackage,ReqresCourseSinglePackage} from "./data-model-classes";
//import { Class1, Class2 } from "./data-model-classes";

@Injectable({
  providedIn: 'root'
})
export class DataModelManagerService {
  
  constructor(private http: HttpClient) { }

  // URL to the example reqres.in web service
  //private urlReqres: string = "https://reqres.in/api/Students";

  // Edit the base URL string to the web service
  private url: string = "https://ancient-brook-70986.herokuapp.com/api/";

    //stuff to select/remember to add to student chart.. data modle
    public currentStudent:ReqresStudents; 

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handler, from the Angular docs
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Data service operations

  // Get all
  reqresStudentsGetAll(): Observable<ReqresStudentsCollectionPackage> {
    return this.http.get<ReqresStudentsCollectionPackage>(`${this.url}students`);
  }

  reqresCourseGetAll(): Observable<ReqresCourseCollectionPackage> {
    return this.http.get<ReqresCourseCollectionPackage>(`${this.url}courses`);
  }

  // Get one
  reqresStudentsGetById(id: number): Observable<ReqresStudentsinglePackage> {
    return this.http.get<ReqresStudentsinglePackage>(`${this.url}students/${id}`);
  }

  reqresCourseGetById(id: number): Observable<ReqresCourseSinglePackage> {
    return this.http.get<ReqresCourseSinglePackage>(`${this.url}courses/${id}`);
}

// Get by Program
// Get Courses by program and term
reqresCourseGetByProgramTerm(program: string, term: string): Observable<ReqresCourseCollectionPackage> {
  return this.http.get<ReqresCourseCollectionPackage>(`${this.url}courses/${program}`);
}

  // Add new
  reqresStudentsAdd(newItem: ReqresStudentsCreate): Observable<ReqresStudentsCreateResponse> {
    return this.http.post<ReqresStudentsCreateResponse>(this.url, newItem, this.httpOptions)
      .pipe(
        tap((newItem: ReqresStudentsCreateResponse) => console.log(`Added item ${newItem.name}`)),
        catchError(this.handleError<ReqresStudentsCreateResponse>('students add'))
      );
  }

  // Edit existing
  reqresStudentsEdit(id: number, newItem: ReqresStudentsCreate): Observable<ReqresStudentsCreateResponse> {
    return this.http.put<ReqresStudentsCreateResponse>(`${this.url}/${id}`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: ReqresStudentsCreateResponse) => console.log(`Edited item ${newItem.name}`)),
        catchError(this.handleError<ReqresStudentsCreateResponse>('students edit'))
      );
  }

  // Delete item
  reqresStudentsDelete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
      .pipe(
        tap(() => console.log(`Deleted item with id ${id}`)),
        catchError(this.handleError('students delete'))
      );
  }

}
