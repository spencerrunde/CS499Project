import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData = { email: '', password: '' }; // Initializing empty variables
  constructor(private _auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe( // passes user data into user database
      (res) => console.log(res),
      (err) => console.log(err)
    );
    this.router.navigate(['Login']); // navigates to Login page after successful registration
  }
}
