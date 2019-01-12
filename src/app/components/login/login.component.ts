import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}
  login(type) {
    if (type === 'google') {
      this.authService.loginWithGoogle();
    } else if (type === 'facebook') {
      this.authService.loginWithFacebook();
    } else if (type === 'twitter') {
      this.authService.loginWithTwitter();
    } else {
      console.log('Login Pressed');
    }
  }
}
