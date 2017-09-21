import {Component} from '@angular/core';

import { Plu421DataService } from './plu421.service';

@Component({
  selector: 'plu421',
  styleUrls: ['./plu421.scss'],
  templateUrl: './plu421.html',
})
export class Plu421 {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _plu421DataService:Plu421DataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._plu421DataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._plu421DataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._plu421DataService.getStatusCardData();
  }

}


/* 
add { path: 'westerncdp', component: WesternCDP }  to pipeline.routing.ts
*/