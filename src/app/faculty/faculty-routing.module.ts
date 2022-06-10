import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PlacementDetailsComponent } from './components/placement-details/placement-details.component';
import { AcademicDetailsComponent } from './components/academic-details/academic-details.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      //{ path: '', component: WelcomePageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: WelcomePageComponent },
      {path: '', redirectTo: '/faculty/dashboard', pathMatch: 'full'},
      {path: 'academics', component: AcademicDetailsComponent },
      {path: 'placements', component: PlacementDetailsComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyRoutingModule {}
