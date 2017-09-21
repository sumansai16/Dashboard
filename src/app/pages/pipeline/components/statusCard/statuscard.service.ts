import {Injectable} from '@angular/core';

@Injectable()
export class StatusCardService {


private _data = [
      {
      type: 'number',
      name: 'LACT Interlocks',
      value: 'False',
      }, {
      type: 'number',
      name: 'Pumparound Interlocks',
      value: 'False',
      }, {
      type: 'number',
      name: 'P-10 Pump Interlocks',
      value: 'False',
      }, {
      type: 'number',
      name: 'P-20 Pump Interlocks',
      value: 'False',
      }, {
      type: 'number',
      name: 'P-10 Run Fdback',
      value: 'False',
      }, {
      type: 'number',
      name: 'P-20 Run Fdback',
      value: 'True',
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






  