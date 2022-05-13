import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FacultyRoutingModule } from './faculty-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularMaterialModule } from 'app/material/angular-material.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlacementDetailsComponent } from './components/placement-details/placement-details.component';
import { AcademicDetailsComponent } from './components/academic-details/academic-details.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    WelcomePageComponent,
    PlacementDetailsComponent,
    AcademicDetailsComponent
  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
})

export class FacultyModule{

}
