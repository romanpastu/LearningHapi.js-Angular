import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { 
    this.auth.signOut();
  }

  ngOnInit() {
  }

  logIn(email, password) {
    this.auth.logIn(email,password)

  }

  signUp(email, password) {
    this.auth.signUp(email,password)
    
  }
}

