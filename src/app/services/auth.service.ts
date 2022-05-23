import { Observable, of, Subject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from 'app/model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3000/users';
  private token: string;
  private role: string;
  private tokenTimer: NodeJS.Timer;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  user: string;
  wrongPass: string;
  errMsg: string;

  constructor(private router: Router, private http: HttpClient) {}

  getToken() {
    return this.token;
  }

  getUser() {
    return this.user;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  //userSignup
  createUser(req: any) {
    this.http.post(this.url, req).subscribe(
      (response) => {
        alert('User Registration Sucessful!');
        console.log(response);
        this.router.navigate(['/auth/login']);
      },
      (err) => {
        alert('User already registered');
        this.router.navigate(['/auth/login']);
      }
    );
  }

  loginUser(req: any) {
    //console.log(req);
    this.http
      .post<{
        token: string;
        user: string;
        role: string;
        expiresIn: number;
        message: string;
      }>(this.url + '/login', req)
      .subscribe((response) => {
        const token = response.token;
        this.token = token;
        const role = response.role;
        this.role = role;
        const user = response.user;
        this.user = user;
        /*
        const errorMsg  = response.message;
        this.errMsg = errorMsg;
        */
        console.log(response.message);
        if (response.message == 'Invalid Password' || response.message == 'User not registered!') {
          if (response.message == 'Invalid Password') {
            alert('Invalid Password');
            location.reload();
          }else if (response.message == 'User not registered!') {
            alert('Invalid User');
            location.reload();
          }
        }
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate);

          if (response.role == 'admin') {
            this.router.navigate(['/admin']);
          } else if (response.role == 'student') {
            this.router.navigate(['/student']);
          } else if (response.role == 'faculty') {
            this.router.navigate(['/faculty']);
          }
        }
      });
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/auth/login']);
  }

  private setAuthTimer(duration: number) {
    console.log('Setting Timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', this.user);
    localStorage.setItem('role', this.role);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('expiration');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    const user = localStorage.getItem('user');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      user: user,
      expirationDate: new Date(expirationDate),
    };
  }
}
