import {Injectable} from '@angular/core';

@Injectable()
export class AccLACTDataService {


private _tagCardData = [
      {
      type: 'number',
      unit: 'BBLS',
      name: 'Grand Total',
      value: '58050.00',
      }, {
      type: 'number',
      unit: 'BBLS/D',
      name: 'Today',
      value: '805.00',
      }, {
      type: 'number',
      unit: 'BBLS/D',
      name: 'Yesterday',
      value: '1000.00',
      }, {
      type: 'number',
      unit: 'BBLS/Hr',
      name: 'Flow Rate',
      value: '145.17',
      }, {
      type: 'number',
      unit: 'PSI',
      name: 'LACT DISCH PSI',
      value: '56.33',
      }, {
      type: 'number',
      unit: 'A',
      name: 'VFD Current',
      value: '65.20',
      }, {
      type: 'number',
      unit: 'BBLS/D',
      name: 'Barrel Nom Setpoint',
      value: '1000.00',
      }, {
      type: 'number',
      unit: 'BBLS/D',
      name: 'Suction PSI Setpoint',
      value: '5.00',
      }];

private _tankGaugeData = [
    /*  {
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
    }
    */
    ];

private _statusCardData = [
      {
      type: 'number',
      name: 'Suction PSI Perm',
      value: 'False',
      }, {
      type: 'number',
      name: 'BS&W Hi Hi',
      value: 'False',
      }, {
      type: 'number',
      name: 'BS&W Lockout',
      value: 'False',
      }, {
      type: 'number',
      name: 'Barrel Nom Perm',
      value: 'False',
      }, {
      type: 'number',
      name: 'HMI Enable',
      value: 'False',
      }, {
      type: 'number',
      name: 'Meter Fail',
      value: 'True',
    }, {
      type: 'number',
      name: 'TA Alarm',
      value: 'True',
    }, {
      type: 'number',
      name: 'TOD Perm',
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