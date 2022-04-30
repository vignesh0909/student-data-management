import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';
import { AuthGuard } from "./guards/auth.guard";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlacementDetailsComponent } from './placement-details/placement-details/placement-details.component';
import { StudentCreateComponent } from './student-create/student-create.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: "auth",
    loadChildren: () => import("./auth/auth.module").then(x => x.AuthModule)
  },
  { path: "auth/login",
    loadChildren: () => import("./auth/login/login.component").then(x => x.LoginComponent)
  },
  { path: "auth/signup",
    loadChildren: () => import("./auth/signup/signup.component").then(x => x.SignupComponent)
  },
  {
    path: 'admin',
    //canActivate: [AuthGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: "students", component: StudentCreateComponent},
  { path: 'academic-profile', component: AcademicDetailsComponent },
  { path: 'placement-profile', component: PlacementDetailsComponent },
  { path: 'admin-upload', component: ExcelUploadComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
