import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-intropolation',
  templateUrl: './string-intropolation.component.html',
  styleUrls: ['./string-intropolation.component.css']
})
export class StringIntropolationComponent implements OnInit {

  name:string="vimal";
  age:number=23;
  constructor() { }

  ngOnInit(): void {
  }

}
