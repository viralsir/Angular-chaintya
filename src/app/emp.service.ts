import { Injectable } from '@angular/core';
import {EMPLOYEE} from "./EMPLOYEE";

@Injectable({
  providedIn: 'root'
})
export class EMPService {

  employees:Array<EMPLOYEE>=[]

  constructor() { }

}


/*
new EMPService()
employees[0]=new EMPLOYEE("vimal",23000)
employees[1]=new EMPLOYEE("vishal",3444)

employees.push(new EMPLOYEE(name=""))

emp1=new EMPLOYEE()
emp1.setName("vimal")

employees.push(emp1);
emp1.getName()
*/
