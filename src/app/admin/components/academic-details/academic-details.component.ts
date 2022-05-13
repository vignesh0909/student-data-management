import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone, Injectable } from '@angular/core';
import { StudentService } from 'app/services/student.service';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  position: number;
  subject: string;
  credits: number;
  grade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, subject: 'CN&S', grade: 'A', credits: 3},
  {position: 2, subject: 'SADP', grade: 'A', credits: 3},
  {position: 3, subject: 'WT', grade: 'A', credits: 3},
  {position: 4, subject: 'MEFA', grade: 'A', credits: 3},
  {position: 5, subject: 'CC', grade: 'A', credits: 3},
  {position: 6, subject: 'SADP LAB', grade: 'A', credits: 2},
  {position: 7, subject: 'WT LAB', grade: 'A', credits: 2},
];

@Component({
  selector: 'app-academic-details',
  templateUrl: './academic-details.component.html',
  styleUrls: ['./academic-details.component.css']
})

export class AcademicDetailsComponent implements OnInit {
  subject: string;
  position: number;
  credits: number;
  grade: string;

  constructor(private fb: FormBuilder, private stuService: StudentService) { }
  ngOnInit(): void {

  }

  displayedColumns: string[] = ['position', 'subject', 'grade', 'credits'];
  dataSource = ELEMENT_DATA;
}
