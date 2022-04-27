import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';
import { ExcelUploadComponent } from '../excel-upload/excel-upload.component';
//import { ExcelUploadComponent } from './excel-upload/excel-upload.component';

@Injectable({
  providedIn: 'root'
})
export class ExcelUploadService {
  url = 'http://localhost:3000/students/';
  //data: ExcelUploadComponent;

  constructor(private http :HttpClient) { }

  jsonToMongo(req: any){
    for (let x in req) {
      console.log(req[x]);
      this.http.post(this.url, req[x]).toPromise()
      .catch((err:any) => { throw err; });
    }
  }
}
