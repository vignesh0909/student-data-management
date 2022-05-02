import { Component, OnInit } from '@angular/core';
import { UploadPersonalDetailsService } from 'app/services/upload-personal-details.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-upload-placement-details',
  templateUrl: './upload-placement-details.component.html',
  styleUrls: ['./upload-placement-details.component.scss']
})
export class UploadPlacementDetailsComponent implements OnInit {

  convertedJson!: string;
  data: any;
  subscription: any;

  constructor(private personalUpload: UploadPersonalDetailsService) { }

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
        this.personalUpload.jsonToMongo(data);
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