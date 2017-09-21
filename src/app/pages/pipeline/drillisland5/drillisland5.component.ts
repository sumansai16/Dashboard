import {Component} from '@angular/core';

import { DrillIsland5DataService } from './drillisland5.service';

@Component({
  selector: 'drillisland5',
  styleUrls: ['./drillisland5.scss'],
  templateUrl: './drillisland5.html',
})
export class DrillIsland5 {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _drillIsland5DataService:DrillIsland5DataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._drillIsland5DataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._drillIsland5DataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._drillIsland5DataService.getStatusCardData();
  }

}


/* 
add { path: 'westerncdp', component: WesternCDP }  to pipeline.routing.ts
*/