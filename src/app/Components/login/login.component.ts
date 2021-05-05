import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  TemplateRef,
  NgZone,
  Output,
} from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  NgModel,
} from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: SocialAuthService) {}

  user: SocialUser | undefined;

  ngOnInit(): void {
    if (localStorage.getItem('idToken')) {
      this.router.navigate(['/home']);
    }
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log(user);
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/home']);
    });
  }

  signOut(): any {
    this.authService.signOut().then(
      () => {
        localStorage.removeItem('user');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
