import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { AngularMaterialModule } from "../material/angular-material.module";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule {}
