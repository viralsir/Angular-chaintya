import { Component } from '@angular/core';

@Component({
  selector: 'mytag',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chaintya';
  age:number=12;

  entrycomponent:boolean=false;
  viewcomponent:boolean=false;

  entrybtn(){
    this.entrycomponent=true;
    this.viewcomponent=false;
  }
  viewbtn(){
    this.entrycomponent=false;
    this.viewcomponent=true;
  }

}
