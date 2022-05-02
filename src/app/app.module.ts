import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { AngularMaterialModule } from "./material/angular-material.module";
import { StudentCreateComponent } from './student-create/student-create.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PlacementDetailsComponent } from './placement-details/placement-details/placement-details.component';
import { AcademicDetailsComponent } from "./academic-details/academic-details.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './student/components/dashboard/dashboard.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentCreateComponent,
    PlacementDetailsComponent,
    AcademicDetailsComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FilterPipeModule,
    AngularMaterialModule,
    OrderModule,
    NgxPaginationModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
