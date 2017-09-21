import {Injectable} from '@angular/core';

@Injectable()
export class TestDataService {


private _testData = [
    {
      id: 1,
      name: 'Plains CDP',
      route: 'plainscdp',
      children: [
        { id: 2, name: 'radio', route: 'plainscdp/radios' }
      ]
    },{
        id: 3,
        name: 'Western CDP',
        route: 'westerncdp'
      },{
        id: 4,
        name: 'Rustler Bluff',
        route: 'rustlerbluff'
      },{
        id: 5,
        name: 'ACC LACT',
        route: 'acclact'
      },{
        id: 6,
        name: 'PLU 421',
        route: 'plu421'
      },{
        id: 7,
        name: 'Big Sinks 3-25-31',
        route: 'bigsinks',
      },{
        id: 8,
        name: 'Hasta La Vista',
        route: 'hastalavista'
      },{
        id: 9,
        name: 'Drill Island 4',
        route: 'drillisland4'
      },{
        id: 10,
        name: 'Drill Island 5',
        route: 'drillisland5',
      },{
        id: 11,
        name: 'Drill Island 6',
        route: 'drillisland6',
      }      
  ];

  getTestData() {
    return this._testData;
  }

}