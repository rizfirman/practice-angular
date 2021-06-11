import { Injectable } from '@angular/core';
import { Data } from '../model/contact';

@Injectable()
export class DataService {
  input: Data[] = [];

  constructor() {}

  addData(data: Data) {
    this.input.push(data);
  }
  getAllData() {
    return this.input;
  }

  deleteData(name: string) {
    const data = this.input.findIndex((data) => data.name === name);
    this.input.splice(data, 1);
  }
}
