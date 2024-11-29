import { Component } from '@angular/core';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  //dependancy injection
  constructor(private basicSrv : BasicService){

     //call add function using service
  const result = this.basicSrv.addTwoNo(5,6);
  alert(result);
  
  }

 

}
