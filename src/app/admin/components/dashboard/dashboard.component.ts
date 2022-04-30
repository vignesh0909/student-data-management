import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { timer } from 'rxjs';
import { Student } from 'app/model/student';
import { StudentService } from 'app/services/student.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stuForm : FormGroup;
  showModal:boolean = false;
  showModal2:boolean = false;
  editMode:boolean = false;
  students: Student[];
  rollno: String;
  name: String;

  constructor(private fb: FormBuilder, private stuService: StudentService) { }

  ngOnInit(): void {
    this.getStudents();
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

  SearchByRoll(){
    if(this.rollno == ""){
      this.ngOnInit();
    }else{
      this.students = this.students.filter(res => {
          return res.rollno.toLocaleLowerCase().match(this.rollno.toLocaleLowerCase());
      })
    }
  }

  SearchByName(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.students = this.students.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  getStudents(){
    this.stuService.getStudentList().subscribe(
      (res: Student[]) => {
      console.log(res);
      this.students = res;
    })
  }

  onDeleteStudent(id: any){
    if(confirm('Do you want to delete this student?')){
      this.stuService.deleteStudent(id).subscribe(
        (res) => {
          console.log(res);
          this.getStudents();
        },
        (err) => {
          console.log(err);
        })
    }
  }

  onEditStudent(stu:Student){
    this.editMode = true;
    this.showModal = true;
    this.stuForm.patchValue(stu);
  }

  onStuSubmit(){
    if(this.stuForm.valid){
      if(this.editMode){
        this.stuService.updateStudent(this.stuForm.value).subscribe(
          (res) => {
            this.getStudents();
            this.onCloseModal();
          },(err) => console.log(err))
      }
      else{
        this.stuService.addStudent(this.stuForm.value).subscribe(
          (res) => {
            this.getStudents();
            this.onCloseModal();
          }, err => console.log(err))
      }
    }
    else{
      console.log("Student already exits!");
    }
  }

  onCloseModal(){
    this.showModal = false;
    this.showModal2 = false;
    this.editMode = false;
  }

  onAddStudent(){
    this.showModal = true;
  }

  onAddAcademicProfile(){
    this.showModal2 = true;
  }
  onAddPlacementProfile(){

  }

}
