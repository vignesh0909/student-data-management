import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcademicDetailsComponent } from "../academic-details/academic-details.component";
import { AngularMaterialModule } from "../angular-material.module";


const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AngularMaterialModule
  ],
  exports: [RouterModule],
  providers: []
})

export class StudentRoutingModule {}
export const RoutingComponents = [AcademicDetailsComponent]
