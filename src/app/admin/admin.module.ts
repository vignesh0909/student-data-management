import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UploadGradesComponent } from './components/upload-grades/upload-grades.component';
import { UploadPlacementDetailsComponent } from './components/upload-placement-details/upload-placement-details.component';
import { UploadPersonalDetailsComponent } from './components/upload-personal-details/upload-personal-details.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularMaterialModule } from 'app/material/angular-material.module';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AcademicDetailsComponent } from './components/academic-details/academic-details.component';
import { PlacementDetailsComponent } from './components/placement-details/placement-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UploadGradesComponent,
    UploadPlacementDetailsComponent,
    UploadPersonalDetailsComponent,
    WelcomePageComponent,
    AcademicDetailsComponent,
    PlacementDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModule,
    NgxPaginationModule,
    MatMenuModule
  ],
})

export class AdminModule{

}
