import {Injectable} from '@angular/core';

@Injectable()
export class HastaLaVistaDataService {


private _tagCardData = [
      {
      type: 'number',
      unit: 'v',
      name: 'Batt 1',
      value: '14.5',
      }, {
      type: 'number',
      unit: 'v',
      name: 'Batt 2',
      value: '15.5',
      }, {
      type: 'number',
      unit: 'v',
      name: 'Batt 3',
      value: '12.7',
      }, {
      type: 'number',
      unit: 'v',
      name: 'Batt 4',
      value: '13.9',
      }, {
      type: 'number',
      unit: 'v',
      name: 'Temp 1',
      value: '14.5',
      }, {
      type: 'number',
      unit: 'v',
      name: 'Temp 2',
      value: '15.5',
      }, {
      type: 'number',
      unit: 'v',
      name: 'Temp 3',
      value: '12.7',
      }, {
      type: 'number',
      unit: 'v',
      name: 'Temp 4',
      value: '13.9',
      }];

private _tankGaugeData = [
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
      }];

private _statusCardData = [
    /*  {
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
    }
    */
    ];    

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

  getTagCardData() {
    return this._tagCardData;
  }

  getTankGaugeData() {
    return this._tankGaugeData;
  }

  getStatusCardData() {
    return this._statusCardData;
  }
}