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
import { LoginService } from 'src/app/Services/login.service';
import Login from 'src/app/Models/Login.Model';
import Token from 'src/app/Models/Token.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private loginService: LoginService
  ) {
  }

  user: SocialUser | undefined;
  req: Login;

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.router.navigate(['/home']);
    }
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((response) => {
      this.req = { email: response.email };
      this.loginService.login(this.req).subscribe((token: Token) => {
        localStorage.setItem('user', JSON.stringify(token));
        this.router.navigate(['/home']);
      });
    });
  }

  signOut(): any {
    this.authService.signOut().then(
      () => {
        localStorage.removeItem('user');
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
