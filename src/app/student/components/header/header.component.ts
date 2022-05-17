import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private authListenerSubs: Subscription;
  userIsAuthenticated = false;
  user = localStorage.getItem("user");
  fetchedStudent: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(
      isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      }
    );
  }

  onLogout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

}

