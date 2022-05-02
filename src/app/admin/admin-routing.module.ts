import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadGradesComponent } from './components/upload-grades/upload-grades.component';
import { UploadPlacementDetailsComponent } from './components/upload-placement-details/upload-placement-details.component';
import { UploadPersonalDetailsComponent } from './components/upload-personal-details/upload-personal-details.component';



const routes: Routes = [
  { path: 'admin/home', component: HomeComponent },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'upload-grades', component: UploadGradesComponent },
      { path: 'upload-placement-details', component: UploadPlacementDetailsComponent },
      { path: 'upload-personal-details', component: UploadPersonalDetailsComponent },
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
