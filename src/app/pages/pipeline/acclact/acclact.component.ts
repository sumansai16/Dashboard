import {Component} from '@angular/core';

import { AccLACTDataService } from './acclact.service';

@Component({
  selector: 'acclact',
  styleUrls: ['./acclact.scss'],
  templateUrl: './acclact.html',
})
export class AccLACT {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _accLACTDataService:AccLACTDataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._accLACTDataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._accLACTDataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._accLACTDataService.getStatusCardData();
  }

}


/* 
add { path: 'westerncdp', component: WesternCDP }  to pipeline.routing.ts
*/