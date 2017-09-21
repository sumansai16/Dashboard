import {Injectable} from '@angular/core';

@Injectable()
export class RustlerBluffDataService {


private _tagCardData = [
      {
      type: 'number',
      unit: 'BBLS',
      name: 'Grand Total',
      value: '8737047',
      }, {
      type: 'number',
      unit: 'BBLS/HR',
      name: 'Flow',
      value: '0.00',
      }, {
      type: 'number',
      unit: 'PSI',
      name: 'Last Suction',
      value: '217.24',
      }, {
      type: 'number',
      unit: 'PSI',
      name: 'Triplex Suction',
      value: '13.36',
    }, {
      type: 'number',
      unit: 'hrs',
      name: 'Run Hours',
      value: '0.73',
    }, {
      type: 'number',
      unit: 'hrs',
      name: 'Max Run',
      value: '6.13',
    }, {
      type: 'number',
      unit: 'hrs',
      name: 'Tot Run',
      value: '6.13',
    }, {
      type: 'number',
      unit: 'hrs',
      name: 'Starts',
      value: '1149.00',
    }];

private _tankGaugeData = [
     /* {
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
      name: 'Chevron Delivery Perm',
      value: 'False',
      }, {
      type: 'number',
      name: 'CVX Pipeline PSI Perm',
      value: 'False',
      }, {
      type: 'number',
      name: 'E-Stop',
      value: 'False',
      }, {
      type: 'number',
      name: 'Divert Valve Open',
      value: 'False',
      }, {
      type: 'number',
      name: 'Interlocks Ok',
      value: 'False',
      }, {
      type: 'number',
      name: 'Running',
      value: 'True',
      }, {
        type: 'number',
        name: 'Healthy',
        value: 'True',
      }, {
        type: 'number',
        name: 'Suction Lockout',
        value: 'True',
      }, {
        type: 'number',
        name: 'PSI Perm',
        value: 'True',
      }, {
        type: 'number',
        name: 'PSI Hi Hi',
        value: 'True',
      }, {
        type: 'number',
        name: 'Sump Hi Hi',
        value: 'True',
      }, {
        type: 'number',
        name: 'Soft Start Motor OL',
        value: 'True',
      }, {
        type: 'number',
        name: 'Triplex HPSD',
        value: 'True',
      }, {
        type: 'number',
        name: 'Triplex LPSD',
        value: 'True',
      }, {
        type: 'number',
        name: 'Triplex VIBE TRIP',
        value: 'True',
      }, {
        type: 'number',
        name: 'Triplex Low Crank LVL',
        value: 'True',
      }, {
        type: 'number',
        name: 'Triplex Suction PSI Hi Hi',
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