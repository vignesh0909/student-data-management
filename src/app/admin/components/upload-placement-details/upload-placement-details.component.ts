import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UploadPlacementDetailsService } from 'app/services/upload-placement-details.service';

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

  constructor(private placementsUpload: UploadPlacementDetailsService, public dialog: MatDialog) { }

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
        this.placementsUpload.jsonToMongo(data);
        const dialogRef = this.dialog.open(DialogBox, {
          width: '250px',
        });
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

@Component({
  //selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-box.html',
})
export class DialogBox {

  constructor(public dialogRef: MatDialogRef<DialogBox>) {}
  onOkClick(): void {
    this.dialogRef.close();
  }

}
