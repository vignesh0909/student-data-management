import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AuthService } from 'app/services/auth.service';

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit, OnDestroy {
  convertedJson!: string;
  data: any;
  subscription: any;
  uploadSuccess: any;

  constructor(private authService: AuthService, public dialog: MatDialog) { }

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
        this.authService.jsonToMongo(data);
        this.uploadSuccess = true;
        const dialogRef = this.dialog.open(DialogBox, {
          width: '250px',
        });
      })
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
