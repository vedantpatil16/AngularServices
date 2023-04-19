import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  public ChkPrime(iNo : number) : boolean
  {
    let iCnt : number = 0;
    for(iCnt=2; iCnt <= (iNo/2); iCnt++)
    {
      if(iNo % iCnt == 0)
      {
        break;
      }
    }

    let iCheck : number = (iNo/2)+1;
    iCheck = Math.floor(iCheck);

    if(iCnt == iCheck)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  constructor() { }
}
