import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadGradesComponent } from './components/upload-grades/upload-grades.component';
import { UploadPlacementDetailsComponent } from './components/upload-placement-details/upload-placement-details.component';
import { UploadPersonalDetailsComponent } from './components/upload-personal-details/upload-personal-details.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { PlacementDetailsComponent } from './components/placement-details/placement-details.component';
import { AcademicDetailsComponent } from './components/academic-details/academic-details.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: WelcomePageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'upload-grades', component: UploadGradesComponent },
      { path: 'upload-placement-details', component: UploadPlacementDetailsComponent },
      { path: 'upload-personal-details', component: UploadPersonalDetailsComponent },
      { path: 'placements', component: PlacementDetailsComponent },
      { path: 'academics', component: AcademicDetailsComponent },
      { path: 'registration', component:  SignupComponent},
      //{ path: 'home', component: HomeComponent },
      {path: '', redirectTo: '/admin', pathMatch: 'full'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
