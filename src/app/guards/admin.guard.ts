import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AdminGuard implements CanActivate {
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
    if (userRole != 'admin') {
      alert("un authorized");
      if(userRole == "student"){
        this.router.navigate(['/student']);
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
