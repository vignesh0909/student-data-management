import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { AngularMaterialModule } from "./angular-material.module";
import { StudentCreateComponent } from './student-create/student-create.component';
import { OrderModule } from 'ngx-order-pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PlacementDetailsComponent } from './placement-details/placement-details/placement-details.component';
import { AcademicDetailsComponent } from "./academic-details/academic-details.component";
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentCreateComponent,
    PlacementDetailsComponent,
    AcademicDetailsComponent,
    ExcelUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FilterPipeModule,
    AngularMaterialModule,
    OrderModule,
    NgxPaginationModule,
  ],
  providers: [
    ExcelUploadComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
