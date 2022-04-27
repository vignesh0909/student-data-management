import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = 'http://localhost:3000/students/';

  constructor(private http :HttpClient) { }

  addStudent(stu:Student){
    return this.http.post(this.url, stu);
  }

  getStudentList() {
    return this.http.get<Student[]>(this.url);
  }

  deleteStudent(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }

  updateStudent(stu:Student){
    return this.http.put(`${this.url}/${stu._id}`, stu);
  }
}
