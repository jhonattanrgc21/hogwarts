// Modulos de Angular
import { Component, OnInit } from '@angular/core';

// Servicios
import { StudentService } from '../../services/student.service';

// Interfaces
import { Student } from '../../interfaces/students.interface';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  // Atributos
  filterStudents: string = '';
  students: any = [];

  // Constructor
  constructor(private studentService: StudentService) { }

  // Metodos
  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() {
    this.studentService.getStudents().subscribe((data: Student) => {
      this.students = data;
    });
  }

}
