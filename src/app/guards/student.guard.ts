import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userRole = localStorage.getItem('role');
    if (userRole != 'student') {
      alert("un authorized");
      if(userRole == "admin"){
        this.router.navigate(['/admin']);
      }else if(userRole == "faculty"){
        this.router.navigate(['/faculty']);
      }
      return false;
    }else{
      //this.router.navigate(['/student']);
      return true;
    }
  }
}
