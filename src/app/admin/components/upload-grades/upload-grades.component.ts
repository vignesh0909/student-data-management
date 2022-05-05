import { Component, OnInit } from '@angular/core';
import { UploadGradesService } from 'app/services/upload-grades.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-grades',
  templateUrl: './upload-grades.component.html',
  styleUrls: ['./upload-grades.component.scss']
})
export class UploadGradesComponent implements OnInit {

  convertedJson!: string;
  data: any;
  subscription: any;

  constructor(private gradesUpload: UploadGradesService) { }

  ngOnInit(): void {

  }

  fileUpload(event: any){
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) => {
      console.log(event);
      let binaryData = event.target.result;
      let workbook = XLSX.read(binaryData,{type: 'binary'});
      workbook.SheetNames.forEach(sheet => {
        var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        this.gradesUpload.jsonToMongo(data);
      })
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
