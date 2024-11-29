import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  //simulated list of task
  private tasks: string[] = ['Task 1', 'Task 2', 'Task 3']

  constructor() {}

  //method for add two numbers
   addTwoNo(num1: number, num2: number){
    return num1+num2;
  }

  //method for sub two numbers
  subTwoNo(num1: number, num2:number){
    return num1-num2;
  }

  //method to get all task 
  getTasks(): string[]{
    return this.tasks;
  }

  //method to add new task
  addTask(task: string): void{
    this.tasks.push(task);
  }

  //method to remove a task by index
  removeTask(index: number): void{
    this.tasks.splice(index, 1)
  }



}
