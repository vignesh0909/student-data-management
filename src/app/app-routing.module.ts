import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicDetailsComponent } from './academic-details/academic-details.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from "./guards/auth.guard";
import { PageNotFoundComponent } from './auth/page-not-found/page-not-found.component';
import { AdminGuard } from './guards/admin.guard';
import { StudentGuard } from './guards/student.guard';
import { FacultyGuard } from './guards/faculty.guard';

const routes: Routes = [
  {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: "auth/login", component: LoginComponent},
  { path: "auth/signup", component: SignupComponent},
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'student',
    canActivate: [AuthGuard, StudentGuard],
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'faculty',
    canActivate: [AuthGuard, FacultyGuard],
    loadChildren: () =>
      import('./faculty/faculty.module').then((m) => m.FacultyModule),
  },
  //{ path: "students", component: StudentCreateComponent},
  //{ path: 'academics', component: AcademicDetailsComponent },
  //{ path: 'placements', component: PlacementDetailsComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
