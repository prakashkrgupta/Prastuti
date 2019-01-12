import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  private authState: Observable<any>;
  private currentUser: any = null;

  constructor(private angularFire: AngularFireAuth) {
    this.authState = this.angularFire.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
  }

  loginWithGoogle() {
    return this.angularFire.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }
  loginWithFacebook() {
    return this.angularFire.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }
  loginWithTwitter() {
    return this.angularFire.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }
}
