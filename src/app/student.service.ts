import { Injectable } from '@angular/core';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  createStudent():Student[]{
    return [
      new Student("Aditya",1,98),
      new Student("Tejas",2,96),
      new Student("Yash",3,94),
      new Student("Anuj",4,91),
      new Student("Varad",5,95),
    ]
  }
}
