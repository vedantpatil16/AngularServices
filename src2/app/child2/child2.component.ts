import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit 
{
  public iRet : number = 0;

  constructor(private Stringobj : StringService) { }

  ngOnInit(): void 
  {
    this.iRet = this.Stringobj.CountCapital("Angular And TypeScript : Vedant Patil")
  }

}
