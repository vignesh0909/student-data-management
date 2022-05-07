import { Component, NgModule, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})

export class PageNotFoundComponent implements OnInit {

  constructor(private router:RouterModule) { }

  ngOnInit(): void {
  }

}
