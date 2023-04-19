import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit 
{
  public bRet : any;

  constructor(private numberobj : NumberService) { }

  ngOnInit(): void 
  {
    this.bRet = this.numberobj.ChkPrime(13);
  }

}
