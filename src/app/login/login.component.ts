import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recoverSuccess : Boolean = false;
  recoverFail : Boolean = false;
  constructor(public auth: AuthService, public af: AngularFireAuth) { 
    this.auth.signOut();
    this.recoverFail = false;
    this.recoverSuccess = false;
  }

  ngOnInit() {
  }

  logIn(email, password) {
    this.auth.logIn(email,password)

  }

  signUp(email, password) {
    this.auth.signUp(email,password)
    
  }

  resetPwd(email) {
    
    var auth = this.af.auth;
    var emailAddress = email
    console.log(emailAddress)
    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
      console.log("sent")

    }).catch(function (error) {
      console.log("not sent")
    });

    if(email = "" || !email.toString().includes("@")){
      this.recoverFail = true;
      this.recoverSuccess = false;
    }else{
      this.recoverFail = false;
      this.recoverSuccess = true;
    }
  }
}

