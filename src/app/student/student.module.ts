import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentRoutingModule } from './student-routing.module';
import { AngularMaterialModule } from 'app/material/angular-material.module';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AcademicDetailsComponent } from './components/academic-details/academic-details.component';
import { PlacementDetailsComponent } from './components/placement-details/placement-details.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    MyProfileComponent,
    PlacementDetailsComponent,
    AcademicDetailsComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  providers: [HeaderComponent]
})

export class StudentModule{

}
