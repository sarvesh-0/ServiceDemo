import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloserviceComponent } from './helloservice/helloservice.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HelloserviceComponent,DisplayStudentComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ServiceDemo';
}
