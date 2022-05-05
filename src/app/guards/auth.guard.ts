import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean>{
    const isAuth = this.authService.getIsAuth();
    if(!isAuth){
      this.router.navigate(['/auth/login']);
    }
    return isAuth;
    /*
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
    }
    return this.auth.isLoggedIn();
    */
  }
}
