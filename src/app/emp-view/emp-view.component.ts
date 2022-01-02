import { Component, OnInit } from '@angular/core';
import {EMPService} from "../emp.service";

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EMPVIEWComponent implements OnInit {

  constructor(public EmpServ:EMPService) { }

  ngOnInit(): void {
  }

}
