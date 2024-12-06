import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  public sayHello(){
    return "hello service called"
  }
}
