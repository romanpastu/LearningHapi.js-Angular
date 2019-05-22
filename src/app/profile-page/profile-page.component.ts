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

  }

  onUpdatePic(url) {
    this.user = this.af.auth.currentUser;

    console.log(this.user)
    console.log(url)
    this.user.updateProfile({
      photoURL: url
    }).then(function () {
      // Update successful.

      location.reload();
    }).catch(function (error) {
      //error
    });
  }

  onUpdateNick(nick) {
    this.user = this.af.auth.currentUser;

    console.log(this.user)
    console.log(nick)
    if(nick != ""){
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

  ngOnInit() {
  }

}
