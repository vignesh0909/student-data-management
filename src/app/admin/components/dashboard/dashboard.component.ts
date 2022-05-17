import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Student } from 'app/model/student';
import { StudentService } from 'app/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  stuForm: FormGroup;
  editMode: boolean = false;
  showModal: boolean = false;
  students: Student[];
  search: any;
  totalRecords: any;
  page: any = 1;

  constructor(private fb: FormBuilder, private stuService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
    this.stuForm = this.fb.group({
      _id: [''],
      rollno: ['Ex. XXBQXA0XXX', Validators.required],
      FullName: ['Ex. Someone', Validators.required],
      Gender: ['M'],
      Year: ['I'],
      Department_Course: [''],
      StudentAadharNumber: [],
      FatherName: [],
      MotherName: [],
      MobileNumber: ['9898989898'],
      Email_Id: ['abc@gmail.com'],
    });
  }

  getStudents() {
    this.stuService.getStudentList().subscribe((res: Student[]) => {
      //console.log(res);
      this.totalRecords = res.length;
      //console.log(this.totalRecords);
      this.students = res;
    });
  }

  onDeleteStudent(id: any) {
    if (confirm('Do you want to delete this student?')) {
      this.stuService.deleteStudent(id).subscribe(
        (res) => {
          console.log(res);
          this.getStudents();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  onEditStudent(req: any) {
    this.editMode = true;
    this.showModal = true;
    this.stuForm.patchValue(req);
  }

  onStuSubmit() {
    console.log(this.editMode);
    if (this.stuForm.valid) {
      this.stuService.updateStudent(this.stuForm.value).subscribe(
        (res) => {
          this.getStudents();
          this.onCloseModal();
        },
        (err) => console.log(err)
      );
    } else {
      console.log('Student already exits!');
    }
  }

  onCloseModal() {
    this.showModal = false;
    this.editMode = false;
  }

  clickedStudent(req: any) {
    localStorage.setItem('currentUser', req);
  }
}
