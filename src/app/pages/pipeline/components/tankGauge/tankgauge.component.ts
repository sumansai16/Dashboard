import { Component, Input } from '@angular/core';

import { TankGaugeService } from './tankgauge.service';


@Component({
  selector: 'tankgauge',
  templateUrl: './tankgauge.html',
  styleUrls: ['./tankgauge.scss']
})
export class TankGauge {
  //public TankGauge:Array<Object>;
  @Input() TankGauge:Array<Object>;


  constructor() {
  }

  ngOnInit() {
    
    //this.TankGauge = this.TankGaugeData;
  }

/*
  private _loadTankGaugeService() {
    this.TankGauge = this._tankGaugeService.getData();
  }
*/
}


/* add dependencies to dashboard.module.ts:
import { TankGauge } from './tankgauge';
import { TankGaugeService } from './tankgauge/tankgauge.service';

@NgModule({
  imports: [
  ],
  declarations: [
    TankGauge
  ],
  providers: [
    TankGaugeService
  ]
})
, add selector to app/assets/i18n/US/en.json 
"dashboard": {
    "tankgauge": "Tank Gauge"
    }

*/
