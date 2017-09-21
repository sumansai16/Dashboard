import {Component} from '@angular/core';

import { BigSinksDataService } from './bigsinks.service';

@Component({
  selector: 'bigsinks',
  styleUrls: ['./bigsinks.scss'],
  templateUrl: './bigsinks.html',
})
export class BigSinks {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _bigSinksDataService:BigSinksDataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._bigSinksDataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._bigSinksDataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._bigSinksDataService.getStatusCardData();
  }

}


/* 
add { path: 'westerncdp', component: WesternCDP }  to pipeline.routing.ts
*/