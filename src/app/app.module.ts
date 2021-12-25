import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {child1Component} from "./child1.component";
import { Child2Component } from './child2/child2.component';
import { StringIntropolationComponent } from './string-intropolation/string-intropolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoDatabindingComponent } from './two-databinding/two-databinding.component';
import {FormsModule} from "@angular/forms";
import { TdfComponent } from './tdf/tdf.component';

@NgModule({
  declarations: [
    AppComponent,child1Component, Child2Component, StringIntropolationComponent, PropertyBindingComponent, EventBindingComponent, TwoDatabindingComponent, TdfComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
