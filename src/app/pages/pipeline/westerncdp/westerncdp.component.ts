import {Component} from '@angular/core';

import { WesternDataService } from './westerncdp.service';

@Component({
  selector: 'westerncdp',
  styleUrls: ['./westerncdp.scss'],
  templateUrl: './westerncdp.html',
})
export class WesternCDP {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _westernDataService:WesternDataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._westernDataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._westernDataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._westernDataService.getStatusCardData();
  }

}


/* 
add { path: 'westerncdp', component: WesternCDP }  to pipeline.routing.ts
*/