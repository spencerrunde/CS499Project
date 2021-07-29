import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUri:string="http://localhost:3000/api/user";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this.baseUri+'/register', user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this.baseUri+'/login', user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
    
  }

  logoutUser() {
    localStorage.removeItem('token')
  }
}
