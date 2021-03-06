import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public af: AngularFireAuth, public router: Router) { }

  logIn(email, password) {


    this.af.auth.signInWithEmailAndPassword(email, password).then((user) => {

      this.router.navigate(['/explorer']);
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      
    });
  }


  signUp(email, password) {
    var storedUser = null;

    var defaultnick = email.match(/^(.*?)@/)

    this.af.auth.createUserWithEmailAndPassword(email, password).then((user) => {

      storedUser = this.af.auth.currentUser;
      storedUser.updateProfile({
        displayName: defaultnick[1],
      });

      
      this.router.navigate(['/explorer']);
    }
    ).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      
    });
  }

  signOut() {
    return this.af.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }


}
