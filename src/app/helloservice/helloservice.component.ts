import { Component } from '@angular/core';
import { HelloServiceService } from '../hello-service.service';

@Component({
  selector: 'app-helloservice',
  imports: [],
  templateUrl: './helloservice.component.html',
  styleUrl: './helloservice.component.css'
})
export class HelloserviceComponent {
  msg!:string
  constructor(hs:HelloServiceService){
    this.msg = hs.sayHello()
  }
}
