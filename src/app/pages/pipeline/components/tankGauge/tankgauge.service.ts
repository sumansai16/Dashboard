import {Injectable} from '@angular/core';

@Injectable()
export class TankGaugeService {


private _data = [
      {
      type: 'number',
      name: 'Tank 1',
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '2.75',
      }, {
      type: 'number',
      name: 'Tank 2',
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '8.75',
      }, {
      type: 'number',
      name: 'Tank 3',
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '12.75',
      }, {
      type: 'number',
      name: 'Tank 4',
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '18.75',
      }, {
      type: 'number',
      name: 'Tank 5',
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '15.75',
      }, {
      type: 'number',
      name: 'Tank 6',
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '5.55',
    }, {
      type: 'number',
      name: 'Tank 7',
      unit: 'ft',
      min: '0.00',
      max: '40.00',
      value: '25.00',
    }, {
      type: 'number',
      name: 'Tank 8',
      unit: 'ft',
      min: '0.00',
      max: '40.00',
      value: '32.75',
    }, {
      type: 'number',
      name: 'Tank 9',
      unit: 'ft',
      min: '0.00',
      max: '10.00',
      value: '8.20',
    }, {
      type: 'number',
      name: 'Tank 10',
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '3.00',
    }];



  getData() {
    return this._data;
  }
}






  