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
  private authStatusListener= new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private http :HttpClient) {}

  getToken() {
    return this.token;
  }

  getIsAuth(){
    return this.isAuthenticated;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  //adminLogin
  /*
  adminLogin(req: any) {
    console.log(req.password);
    if (req.username === 'admin@vvit.net' && req.password === 'admin12345') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      this.router.navigate(['/admin']);
      return of({ name: 'ADMIN VVIT', email: 'admin@gmail.com' });
    }
    console.log(req);
    this.router.navigate(['/admin']);
    this.http.post(this.url, req).toPromise()
    .catch((err: any) => { throw err; });
    //return throwError(new Error('Failed to login'));
  }
  */

  //userSignup
  createUser(req: any){
    this.http.post(this.url, req)
    .subscribe(response => {
      alert("User Registration Sucessful!");
      console.log(response);
      this.router.navigate(['/auth/login']);
    },
    (err) => {
      alert("User Registration already registered");
    });
  }

  loginUser(req: any){
    this.http.post<{token: string, role: string, expiresIn: number }>(this.url+"/login", req)
      .subscribe(response => {
        const token  = response.token;
        this.token = token;
        const role  = response.role;
        this.role = role;
        if(token){
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate =  new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate);

          if(response.role == "admin"){
            this.router.navigate(['/admin']);
          }
          else if(response.role == "student"){
            this.router.navigate(['/student']);
          }
          else if(response.role == "faculty"){
            this.router.navigate(['/faculty']);
          }
        }
      })
  }

  autoAuthUser(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0){
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

  private setAuthTimer(duration: number){
    console.log("Setting Timer: "+duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date){
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
  }

  private clearAuthData(){
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
  }

  private getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    if(!token || !expirationDate){
      return;
    }
    return{
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }

}
