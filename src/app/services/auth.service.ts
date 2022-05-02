import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000/users/';

  constructor(private router: Router, private http :HttpClient) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  adminLogin(req: any) {
    console.log(req.password);
    if (req.username === 'admin@vvit.net' && req.password === 'admin12345') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.router.navigate(['/admin']);
      return of({ name: 'ADMIN VVIT', email: 'admin@gmail.com' });
    }

   /*
    console.log(req);
    this.router.navigate(['/admin']);
    this.http.post(this.url, req).toPromise()
    .catch((err: any) => { throw err; });
    //return throwError(new Error('Failed to login'));
    */
  }
}
