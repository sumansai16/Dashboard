import {Component} from '@angular/core';

import { RustlerBluffDataService } from './rustlerbluff.service';

@Component({
  selector: 'rustlerbluff',
  styleUrls: ['./rustlerbluff.scss'],
  templateUrl: './rustlerbluff.html',
})
export class RustlerBluff {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _rustlerBluffDataService:RustlerBluffDataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._rustlerBluffDataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._rustlerBluffDataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._rustlerBluffDataService.getStatusCardData();
  }

}


/* 
add { path: 'westerncdp', component: WesternCDP }  to pipeline.routing.ts
*/