import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { ExcelUploadService } from '../services/excel-upload.service';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.scss']
})

export class ExcelUploadComponent implements OnInit {
  convertedJson!: string;
  data: any;
  subscription: any;
  constructor(private excelService: ExcelUploadService) { }
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
        console.log(data);
        this.convertedJson = JSON.stringify(data,undefined,4);
        this.excelService.jsonToMongo(data);
      })
      //console.log(workbook);
    }
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
