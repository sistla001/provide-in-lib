import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class KsPlatformService {

  private value = 0;

  constructor() { }

  setValue(val: number) {
    this.value = val;
  }

  getValue() {
    return this.value;
  }
}
