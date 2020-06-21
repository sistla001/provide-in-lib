import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KsRootService {

  private value = 0;

  constructor() { }

  setValue(val: number) {
    this.value = val;
  }

  getValue() {
    return this.value;
  }
}
