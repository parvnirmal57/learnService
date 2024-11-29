import { Component, OnInit } from '@angular/core';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:string[] = [];
  newTask: string = '';

  constructor(private basicSrv : BasicService){}

  ngOnInit(): void {
    this.tasks = this.basicSrv.getTasks()
  }

  addTask(): void{
    if (this.newTask.trim()) {
      this.basicSrv.addTask(this.newTask);
      this.newTask = '';
      this.tasks = this.basicSrv.getTasks();
    }
    }
    //remove task by index
    removeTask(index: number):void{
      this.basicSrv.removeTask(index);
      this.tasks = this.basicSrv.getTasks();
    }

}
