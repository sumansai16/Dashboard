import {Component} from '@angular/core';

import { DrillIsland4DataService } from './drillisland4.service';

@Component({
  selector: 'drillisland4',
  styleUrls: ['./drillisland4.scss'],
  templateUrl: './drillisland4.html',
})
export class DrillIsland4 {
public TankGauge:Array<Object>;
public TagCard:Array<Object>;
public StatusCard:Array<Object>;


  constructor(private _drillIsland4DataService:DrillIsland4DataService) {
  }

  ngOnInit() {
    this._loadTankGaugeService();
    this._loadTagCard();
    this._loadStatusCard();
    //alert(JSON.stringify(this.TankGauge));
  }

  private _loadTankGaugeService() {
    this.TankGauge = this._drillIsland4DataService.getTankGaugeData();
  }
  
  private _loadTagCard() {
    this.TagCard = this._drillIsland4DataService.getTagCardData();
  }

  private _loadStatusCard() {
    this.StatusCard = this._drillIsland4DataService.getStatusCardData();
  }

}


/* 
add { path: 'westerncdp', component: WesternCDP }  to pipeline.routing.ts
*/