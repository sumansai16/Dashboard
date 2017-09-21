import {Injectable} from '@angular/core';

@Injectable()
export class PropertyCardService {


private _data = [
      {
      type: 'number',
      unit: 'BBLS',
      name: 'Grand Total',
      value: '8737047',
      }, {
      type: 'number',
      unit: 'BBLS/D',
      name: 'Today',
      value: '0',
      }, {
      type: 'number',
      unit: 'BBLS/D',
      name: 'Yesterday',
      value: '392',
      }, {
      type: 'number',
      unit: 'BBLS/HR',
      name: 'Flow',
      value: '0.00',
      }, {
      type: 'number',
      unit: 'BBLS',
      name: 'BS&W (sed and wst)',
      value: '0.00',
      }, {
      type: 'number',
      unit: '°F',
      name: 'Temperature',
      value: '87.18',
    }, {
      type: 'number',
      unit: 'PSI',
      name: 'Header',
      value: '-1.44',
    }];


  /* private _data = [{
      type: 'pValue',
      name: 'Barrels Grand Total',
      value: '0',
      time: '5/16/2017 2:38:48 PM',
    }, {
      type: 'pValue',
      name: 'Barrels Today',
      value: '0',
      time: '5/16/2017 2:38:48 PM',
    }, {
      type: 'pValue',
      name: 'Barrels Yesterday',
      value: '0',
      time: '5/16/2017 2:38:48 PM',
    }, {
      type: 'pValue',
      name: 'Flow BBL/Hr',
      value: '0',
      time: '5/16/2017 2:38:48 PM',
    }, {
      type: 'pValue',
      name: 'BS&W',
      value: '0',
      time: '5/16/2017 2:38:48 PM',
    }, {
      type: 'pValue',
      name: 'Temperature',
      value: '0',
      time: '5/16/2017 2:38:48 PM',
  }];
  */

  getData() {
    return this._data;
  }
}






  