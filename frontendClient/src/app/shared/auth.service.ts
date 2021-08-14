import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUri: string = 'http://localhost:3000/api/user'; // Defining base uri for routes
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  // POST method to add new user to user database
  registerUser(user: any) {
    return this.http.post<any>(this.baseUri + '/register', user);
  }

  // POST method to log a user in
  loginUser(user: any) {
    return this.http.post<any>(this.baseUri + '/login', user);
  }

  // Returns true or false if the user does or does not have a token
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // Returns token string from local storage
  getToken() {
    return localStorage.getItem('token');
  }

  // Removes token from local storage, logging out the user
  logoutUser() {
    localStorage.removeItem('token');
  }
}
