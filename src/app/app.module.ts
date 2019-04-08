import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { HeaderNavComponent } from './header-nav.component';
import { NotFoundComponent } from './not-found.component';
import { FormElementsComponent } from './form-elements.component';
import { StudentsListComponent } from './Students-list.component';
import { StudentsDetailComponent } from './Students-detail.component';
import { AvailableCourseComponent } from './available-course.component';
import { HelpInfoComponent } from './help-info.component';
import { ShoppingcartComponent } from './shoppingcart.component';
import {CartSelectedListComponent} from'./cart-selected-list.component';
import {CartSelectedGridComponent}from'./cart-selected-grid.component';
import {CartSelectedCellComponent}from'./cart-selected-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderNavComponent,
    NotFoundComponent,
    FormElementsComponent,
    StudentsListComponent,
    StudentsDetailComponent,
    AvailableCourseComponent,
    HelpInfoComponent,
    ShoppingcartComponent,
    CartSelectedListComponent,
    CartSelectedGridComponent,
    CartSelectedCellComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
