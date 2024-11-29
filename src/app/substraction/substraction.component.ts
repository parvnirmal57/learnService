import { Component } from '@angular/core';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent {
  
  //dependacy injection
  constructor(private basicSrv : BasicService){
    const result = this.basicSrv.subTwoNo(5,6);
    alert(result)
  }

}
