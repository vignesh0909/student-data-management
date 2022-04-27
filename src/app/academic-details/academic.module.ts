import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table'

import { AuthRoutingModule } from "../auth/auth-routing.module";
import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    AngularMaterialModule,
    Component,
    MatTableModule
  ]
})
export class StudentModule {}
