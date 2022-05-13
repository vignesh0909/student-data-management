import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadGradesService {
  url = 'http://localhost:3000/students/grades/';
  //data: ExcelUploadComponent;

  constructor(private http :HttpClient) { }

  jsonToMongo(req: any){
    from(req)
    .pipe(concatMap(item => this.http.post(this.url, item).toPromise()))
    .subscribe();
  }
}
