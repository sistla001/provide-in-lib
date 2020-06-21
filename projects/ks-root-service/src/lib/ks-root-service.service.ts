import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KsRootService {

  private value = 0;

  constructor() {
    console.log('In Root Service -> value = ' + this.value);
   }

  setValue(val: number) {
    this.value = val;
  }

  getValue() {
    return this.value;
  }
}
