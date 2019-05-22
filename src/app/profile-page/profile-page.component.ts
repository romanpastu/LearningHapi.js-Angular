import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  displayName;
  profilePic = this.af.auth.currentUser.photoURL;
  user = null;
  constructor(public af: AngularFireAuth) {


    this.displayName = this.af.auth.currentUser.displayName;
    console.log("nombre " + this.af.auth.currentUser.displayName)
    console.log("picture" + this.af.auth.currentUser.photoURL)
    console.log(this.af.auth.currentUser)

  }

  onUpdatePic(url) {
    this.user = this.af.auth.currentUser;
    var patt = /\.(?:jpe?g|png)\b/;

    if(patt.test(url)){
      this.user.updateProfile({
        photoURL: url
      }).then(function () {
        // Update successful.
  
  
        location.reload();
      }).catch(function (error) {
        //error
      });
    }else{
      console.log("invalid image extension, it must be jpg/jpeg or png")
    }

    
  }

  onUpdateNick(nick) {
    this.user = this.af.auth.currentUser;

    console.log(this.user)
    console.log(nick)
    if (nick != "") {
      this.user.updateProfile({
        displayName: nick
      }).then(function () {
        // Update successful.


        location.reload();
      }).catch(function (error) {
        //error
      });
    }


  }

  resetPwd() {
    var auth = this.af.auth;
    var emailAddress = this.af.auth.currentUser.email
    console.log(emailAddress)
    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
      console.log("sent")
      console.log(this.emailSent)
      this.emailSent = true;
      console.log(this.emailSent)
    }).catch(function (error) {
      console.log("not sent")

    });
  }

  ngOnInit() {
  }

}
