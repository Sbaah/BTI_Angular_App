import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from './about.component';
import { StudentsListComponent } from './Students-list.component';
import { StudentsDetailComponent } from './Students-detail.component';
import {AvailableCourseComponent } from './available-course.component';
import {HelpInfoComponent} from './help-info.component'; 
import{ShoppingcartComponent}from'./shoppingcart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Students', component: StudentsListComponent },
  { path: 'AvailableCourse',component:AvailableCourseComponent},
  { path: 'HelpInfo',component:HelpInfoComponent},
  { path: 'Shopping_Cart',component: ShoppingcartComponent},
  { path: 'Students/detail/:id', component: StudentsDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
