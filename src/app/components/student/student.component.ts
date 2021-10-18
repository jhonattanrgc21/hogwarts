import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../interfaces/students.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students: any = [];
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudents().subscribe((data: Student) => {
      this.students = data;
    });
  }

}
