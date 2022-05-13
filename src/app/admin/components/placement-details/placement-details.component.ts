import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UploadPlacementDetailsService } from 'app/services/upload-placement-details.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-placement-details',
  templateUrl: './placement-details.component.html',
  styleUrls: ['./placement-details.component.css']
})
export class PlacementDetailsComponent implements OnInit {

  constructor(private placementsUpload: UploadPlacementDetailsService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}

