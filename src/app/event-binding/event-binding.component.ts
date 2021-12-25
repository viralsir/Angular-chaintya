import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  msg="";
  sum ="";
  constructor() { }

  ngOnInit(): void {
  }

  sayHello(name:any){
    //console.log(name.value);
    this.msg=name.value;
    name.value="";
    name.style.backgroundColor='yellow';
  }

  total(no1:any,no2:any){
    this.sum= eval(no1.value) + eval(no2.value);
    no1.value="";
    no2.value="";

  }

}
