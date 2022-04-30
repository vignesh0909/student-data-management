import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {Component} from '@angular/core';

import { AuthRoutingModule } from "../auth/auth-routing.module";
import { AngularMaterialModule } from "../material/angular-material.module";
import { StudentRoutingModule, RoutingComponents } from "./student-routing.module";

@NgModule({
  declarations: [
    RoutingComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule,
    StudentRoutingModule,
    Component
  ]
})
export class StudentModule {}
