import {Component} from '@angular/core';

import { HastaLaVistaDataService } from './hastalavista.service';

@Component({
  selector: 'hastalavista',
  styleUrls: ['./hastalavista.scss'],
  templateUrl: './hastalavista.html',
})
export class HastaLaVista {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _hastaLaVistaDataService:HastaLaVistaDataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._hastaLaVistaDataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._hastaLaVistaDataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._hastaLaVistaDataService.getStatusCardData();
  }

}


/* 
add { path: 'westerncdp', component: WesternCDP }  to pipeline.routing.ts
*/