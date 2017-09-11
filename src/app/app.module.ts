import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {OrgUnitFilterComponent} from "./components/org-unit-filter/org-unit-filter.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrgUnitFilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
