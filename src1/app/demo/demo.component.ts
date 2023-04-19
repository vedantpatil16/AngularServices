import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit 
{

  public iRetAdd : number = 0;
  public iRetSub : number = 0;

  constructor(private serviceobj : ArithmeticService) { }

  ngOnInit(): void 
  {
    this.iRetAdd = this.serviceobj.Addition(11,21);
    this.iRetSub = this.serviceobj.Subtraction(21,11);
  }

}
