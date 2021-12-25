import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
 msg="";
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginRef:NgForm)
  {
    let login=loginRef.value;

    if(login.user=="admin" && login.password==123)
    {
      this.msg="login successfully";
    }
    else{
      this.msg="wrong username or password";
    }
   // console.log(loginRef.value);
    loginRef.reset();
  }

}
