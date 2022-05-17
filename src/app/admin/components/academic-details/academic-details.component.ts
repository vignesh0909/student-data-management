import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone, Injectable } from '@angular/core';
import { StudentService } from 'app/services/student.service';

export interface Grades {
  position: number;
  subjcode: string;
  subject: string;
  grade: string;
  credits: number;
}

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html',
  styleUrls: ['./academic-details.component.css']
})

export class AcademicDetailsComponent implements OnInit {
  fetchedGrades: Grades[];
  user = localStorage.getItem("currentUser");
  panelOpenState = false;

  constructor(private fb: FormBuilder, private stuService: StudentService) { }
  ngOnInit(): void {
    this.academicProfile();
  }

  displayedColumns: string[] = ['S.No.', 'Subjcode', 'Subject', 'Grade', 'Credits'];
  dataSource: any;
  groupedBySem: any;

  academicProfile(){
    console.log(this.user);
    this.stuService.getAcademicProfile(this.user).subscribe((res) => {
      console.log(res);
      this.fetchedGrades = res;
      console.log(this.fetchedGrades);
      this.dataSource = this.fetchedGrades;
      console.log(this.dataSource);
      this.groupedBySem = Object.values(this.groupBy(this.dataSource, 'sem'));
      console.log(this.groupedBySem);
    })
  }

  groupBy = function(xs: any, key: any) {
    console.log(xs);
    return xs.reduce(function(rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  clickedStudent(req: any) {
    localStorage.setItem('currentUser', req);
  }

  clearUser(){
    localStorage.removeItem('currentUser');
  }
}
