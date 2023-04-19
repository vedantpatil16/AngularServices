import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  private iCapital : number = 0;

  public CountCapital(str : string) : number
  {
    let cnt : number = 0;
    for(cnt = 0; cnt < str.length; cnt++)
    {
      if(str[cnt] >= "A" && str[cnt] <= "Z")
      {
        this.iCapital++;
      }
    }
    console.log(this.iCapital);
    return this.iCapital;
  }
  constructor() { }
}
