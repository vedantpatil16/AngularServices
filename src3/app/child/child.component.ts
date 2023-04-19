import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit 
{
  public iRet : number = 0;
  public bRet : boolean = false;
  constructor(private Numberobj : NumberService, private Stringobj : StringService) { }

  ngOnInit(): void 
  { 
    this.bRet = this.Numberobj.ChkPrime(13);
    this.iRet = this.Stringobj.CountCapital("Angular And TypeScript : Vedant Patil")
  }

}
