import { Injectable } from '@angular/core';
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public student_list:Array<Student>=[]
  constructor() { }



}
