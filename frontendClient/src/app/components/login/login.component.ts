import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = { email: '', password: '' }; // Initializing empty variables
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token); // Setting token to local storage when user logins
        this.router.navigate(['/ReadAndDelete']); // Navigating to main table route
      },
      (err) => console.log(err)
    );
  }
}
