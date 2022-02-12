import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Student} from "../student";
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  stdentFormRef=new FormGroup({
    rollno:new FormControl("",[Validators.min(1),Validators.required]),
    name:new FormControl(),
    maths:new FormControl("",[Validators.min(0),Validators.max(100),Validators.required]),
    sci:new FormControl("",[Validators.min(0),Validators.max(100),Validators.required]),
    eng:new FormControl("",[Validators.min(0),Validators.max(100),Validators.required])


  });
  constructor(public studentservice:StudentService) { }

  ngOnInit(): void {
  }

  onsubmitclick(){
    let student=this.stdentFormRef.value;
    this.studentservice.student_list.push(new Student(student.rollno,student.name,student.maths,student.sci,student.eng));

    this.stdentFormRef.reset();
  }


}
