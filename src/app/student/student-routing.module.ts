import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { AcademicDetailsComponent } from './components/academic-details/academic-details.component';
import { PlacementDetailsComponent } from './components/placement-details/placement-details.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', redirectTo: '/student/my-profile', pathMatch: 'full'},
      { path: '', component: WelcomePageComponent },
      { path: 'dashboard', redirectTo: '/student', pathMatch: 'full' },
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'academics', component: AcademicDetailsComponent },
      { path: 'placements', component: PlacementDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
