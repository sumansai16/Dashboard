import { Component } from '@angular/core';

import { RadiosDataService } from './radios.service';

@Component({
  selector: 'radios',
  styleUrls: ['./radios.scss'],
  templateUrl: './radios.html',
})
export class Radios {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _radiosService:RadiosDataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._radiosService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._radiosService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._radiosService.getStatusCardData();
  }

}
