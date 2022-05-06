import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: WelcomePageComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'my-profile', component: MyProfileComponent },
      //{ path: 'home', component: HomeComponent },
      {path: '', redirectTo: '/faculty', pathMatch: 'full'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyRoutingModule {}
