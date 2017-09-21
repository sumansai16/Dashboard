import { Component } from '@angular/core';

import { PlainsDataService } from './plainscdp.service';

@Component({
  selector: 'plainscdp',
  styleUrls: ['./plainscdp.scss'],
  templateUrl: './plainscdp.html',
})
export class PlainsCDP {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _plainsDataService:PlainsDataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._plainsDataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._plainsDataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._plainsDataService.getStatusCardData();
  }

}
