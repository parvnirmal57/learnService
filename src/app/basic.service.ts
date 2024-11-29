import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor() {}
   addTwoNo(num1: number, num2: number){
    return num1+num2;
  }

  subTwoNo(num1: number, num2:number){
    return num1-num2;
  }

}
