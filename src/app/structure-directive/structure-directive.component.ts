import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {

  f1:boolean=true;
  f2:boolean=false;
  flag:boolean=false;
  msg="show"
  constructor() { }
  names=['vimal','vishal','viren','amit']

  ngOnInit(): void {
  }
  toggle(){
    if(this.flag==true)
    {
      this.msg="show";
      this.flag=false;
    }
    else{
      this.msg="hide";
      this.flag=true;
    }

  }
}
