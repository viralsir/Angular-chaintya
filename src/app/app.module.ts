import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {child1Component} from "./child1.component";
import { Child2Component } from './child2/child2.component';
import { StringIntropolationComponent } from './string-intropolation/string-intropolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoDatabindingComponent } from './two-databinding/two-databinding.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TdfComponent } from './tdf/tdf.component';
import { MdfComponent } from './mdf/mdf.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { EMPENTRYComponent } from './emp-entry/emp-entry.component';
import { EMPVIEWComponent } from './emp-view/emp-view.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewComponent } from './student-view/student-view.component';
import {HttpClientModule} from "@angular/common/http";
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,child1Component, Child2Component, StringIntropolationComponent, PropertyBindingComponent, EventBindingComponent, TwoDatabindingComponent, TdfComponent, MdfComponent, StructureDirectiveComponent, EMPENTRYComponent, EMPVIEWComponent, StudentEntryComponent, StudentViewComponent, TaskComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
