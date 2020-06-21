import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class KsPlatformService {

  private value = 0;

  constructor() {
    console.log('In Platform Service -> value = ' + this.value);
  }

  setValue(val: number) {
    this.value = val;
  }

  getValue() {
    return this.value;
  }
}
