import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FacultyRoutingModule } from './faculty-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularMaterialModule } from 'app/material/angular-material.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    WelcomePageComponent,
    MyProfileComponent,
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    AngularMaterialModule
  ],
})

export class FacultyModule{

}
