import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-databinding',
  templateUrl: './two-databinding.component.html',
  styleUrls: ['./two-databinding.component.css']
})
export class TwoDatabindingComponent implements OnInit {

  username="vimal";
  salary=20000;
  constructor() { }

  ngOnInit(): void {
  }

}
