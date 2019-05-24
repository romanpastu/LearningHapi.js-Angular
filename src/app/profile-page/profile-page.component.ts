import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
declare var urlExists: any;

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})

export class ProfilePageComponent implements OnInit {


  invalidExt = false;
  nickChanged = false;
  nickCondition = false;
  emailSent = false;
  displayName;
  profilePic = this.af.auth.currentUser.photoURL;
  user = null;
  constructor(public af: AngularFireAuth) {


    this.displayName = this.af.auth.currentUser.displayName;
    



  }


  ImageExist(url) {
    var img = new Image();
    img.src = url;
    return img.height != 0;
  }
  onUpdatePic(url) {

    this.user = this.af.auth.currentUser;

    var patt = /\.(?:jpe?g|png)\b/;

    if (patt.test(url)) {
      this.invalidExt = false;
      if (!this.ImageExist(url)) {
        this.user.updateProfile({
          photoURL: url
        }).then(function () {
          // Update successful.
          location.reload();
        }).catch(function (error) {
          //error
        });
      } else {
        
      }
    } else {
      
      this.invalidExt = true;
    }


  }

  onUpdateNick(nick) {
    this.nickCondition = false;
    this.user = this.af.auth.currentUser;

    
    if (nick != "") {
      this.nickChanged = true;
      this.user.updateProfile({
        displayName: nick
      }).then(function () {
        // Update successful.
        setTimeout(() => {
          location.reload();
        }, 1000);


      }).catch(function (error) {
        //error
      });
    } else {
      this.nickCondition = true;
    }


  }

  resetPwd() {
    var auth = this.af.auth;
    var emailAddress = this.af.auth.currentUser.email
    
    this.emailSent = true;
    auth.sendPasswordResetEmail(emailAddress).then(function () {
      // Email sent.
      

    }).catch(function (error) {
      
    });
  }

  ngOnInit() {
  }

}
