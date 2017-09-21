import {Injectable} from '@angular/core';

@Injectable()
export class PlainsDataService {


private _tagCardData = [
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

private _tankGaugeData = [
      {
      type: 'number',
      name: "Hong's Tank",
      unit: 'ft',
      min: '0.00',
      max: '80.00',
      value: '25.75',
      }, {
      type: 'number',
      name: "Jeremy's Tank",
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '8.75',
      }, {
      type: 'number',
      name: "Behyad's Tank",
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '12.75',
      }, {
      type: 'number',
      name: "Craig's Tank",
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '18.75',
      }, {
      type: 'number',
      name: "Brad's Tank",
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '15.75',
      }, {
      type: 'number',
      name: "Mike's Tank",
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '5.55',
    }, {
      type: 'number',
      name: "Jeff's Tank",
      unit: 'ft',
      min: '0.00',
      max: '40.00',
      value: '25.00',
    }, {
      type: 'number',
      name: "Chris' Tank",
      unit: 'ft',
      min: '0.00',
      max: '40.00',
      value: '32.75',
    }, {
      type: 'number',
      name: "Casey's Tank",
      unit: 'ft',
      min: '0.00',
      max: '10.00',
      value: '8.20',
    }, {
      type: 'number',
      name: "Jordan's Tank",
      unit: 'ft',
      min: '0.00',
      max: '20.00',
      value: '3.00',
    }];

private _statusCardData = [
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
      value: 'False',
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