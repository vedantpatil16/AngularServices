import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  private iAns : number = 0;

  public Addition(iNo1 : number, iNo2 : number) : number
  {
    this.iAns = iNo1 + iNo2;
    return this.iAns;
  }

  public Subtraction(iNo1 : number, iNo2 : number) : number
  {
    this.iAns = iNo1 - iNo2;
    return this.iAns;
  }

  constructor() { }
}
