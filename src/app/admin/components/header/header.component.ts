import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsAuthenticated = false;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  reload(){
    window.location.reload();
  }

  logout(): void {
    this.auth.logout();
  }
}
