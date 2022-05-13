import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone, Injectable } from '@angular/core';
import { StudentService } from 'app/services/student.service';
import { DataSource } from '@angular/cdk/table';

export interface Placements {
  position: number;
  placeedin: string;
  package: number;
}

@Component({
  selector: 'app-placement-details',
  templateUrl: './placement-details.component.html',
  styleUrls: ['./placement-details.component.css']
})

export class PlacementDetailsComponent implements OnInit {
  fetchedPlacements: Placements[];
  user = localStorage.getItem("user");
  panelOpenState = false;

  constructor(private fb: FormBuilder, private stuService: StudentService) { }
  ngOnInit(): void {
    this.placementProfile();
  }

  displayedColumns: string[] = ['position', 'Company', 'Package'];
  dataSource: any;

  placementProfile(){
    this.stuService.getPlacementProfile(this.user.slice(0,10).toUpperCase()).subscribe((res) => {
      //console.log(res);
      this.fetchedPlacements = res;
      console.log(this.fetchedPlacements);
      this.dataSource = this.fetchedPlacements;
      console.log(this.dataSource);
    })
  }
}
