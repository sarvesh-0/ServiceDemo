import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../Student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-student',
  imports: [CommonModule],
  templateUrl: './display-student.component.html',
  styleUrl: './display-student.component.css'
})
export class DisplayStudentComponent {
  sarr!:Student[]
  constructor(cs:StudentService){
    this.sarr=cs.createStudent()
  }
}
