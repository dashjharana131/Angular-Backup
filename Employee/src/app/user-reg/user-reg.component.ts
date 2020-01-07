import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  country = ["India", "USA", "Japan"]
  UserModel = new User("Jharana", "dashjharana238@gmail.com", 9999999999, "India", "female", true);

  constructor() { }

  ngOnInit() {
  }

}
