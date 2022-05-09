import { Component, Inject, Injectable, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'app/model/student';
import { StudentService } from 'app/services/student.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  editMode:boolean = false;
  showModal:boolean = false;
  stuForm : FormGroup;
  fetchedStudent: any;

  constructor(private fb: FormBuilder, private stuService: StudentService) { }

  user = localStorage.getItem("user");

  ngOnInit(): void {
    this.studentProfile();
    this.stuForm = this.fb.group({
      _id: [''],
      rollno: ['Ex. XXBQXA0XXX', Validators.required],
      name: ['Ex. Someone', Validators.required],
      dept: ['CSE'],
      year: ['I'],
      sem: ['1'],
      sec: ['A'],
      phno: ['9898989898']
    })
  }

  studentProfile(): void {
    this.stuService.getStudent(this.user.slice(0,10).toUpperCase()).subscribe((res) => {
      this.fetchedStudent = res;
      //console.log(res);
    })
  }

  onEditStudent(req: any){
    console.log(req);
    this.editMode = true;
    this.showModal = true;
    this.stuForm.patchValue(req);
  }

  onStuSubmit(){
    if(this.stuForm.valid){
      if(this.editMode){
        this.stuService.updateStudent(this.stuForm.value).subscribe(
          (res) => {
            this.studentProfile();
            this.onCloseModal();
          },
          (err) => console.log(err))
      }
    }
  }

  onCloseModal(){
    this.showModal = false;
    this.editMode = false;
  }

}
