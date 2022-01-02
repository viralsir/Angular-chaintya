import { Component, OnInit } from '@angular/core';
import {EMPService} from "../emp.service";
import {FormControl, FormGroup} from "@angular/forms";
import {EMPLOYEE} from "../EMPLOYEE";

@Component({
  selector: 'app-emp-entry',
  templateUrl: './emp-entry.component.html',
  styleUrls: ['./emp-entry.component.css']
})
export class EMPENTRYComponent implements OnInit {

  empformRef=new FormGroup({
    name:new FormControl(),
    salary:new FormControl()
  })

  constructor(public EmpServ:EMPService) {   //   DI using constructor

  }

  ngOnInit(): void {
  }

  addEmployee(){
    let empform=this.empformRef.value;
   //let  emp1=new EMPLOYEE(empform.name,empform.salary);
   //this.EmpServ.employees.push(emp1);
    this.EmpServ.employees.push(new EMPLOYEE(empform.name,empform.salary))
    this.empformRef.reset();
  }

}
