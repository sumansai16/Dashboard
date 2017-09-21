import { Component, Input } from '@angular/core';

import { TankGaugeService } from './tankgauge.service';


@Component({
  selector: 'tankgauge',
  templateUrl: './tankgauge.html',
  styleUrls: ['./tankgauge.scss']
})
export class TankGauge {
  public TankGauge:Array<Object>;
  //@Input() chartId: string;

  constructor(private _tankGaugeService:TankGaugeService) {
  }


 /* 
 ngOnInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "theme": "light",
      "dataProvider": this._loadTankGaugeService()
    });
  }
  */



  ngOnInit() {

    /*
    this.chart = this.AmCharts.makeChart( this.chartId, {
    "theme": "dark",
    "type": "serial",
    "depth3D": 0,
    "angle": 0,
    "autoMargins": true,
    "dataProvider": [ {
    "category": "Tank Level",
    "value1": 30,
    "value2": 70
  } ],
  "valueAxes": [ {
    "stackType": "100%",
    "gridAlpha": 0
  } ],
  "graphs": [ {
    "type": "column",
    "topRadius": 1,
    "columnWidth": 1,
    "showOnAxis": true,
    "lineThickness": 2,
    "lineAlpha": 0.5,
    "lineColor": "#FFFFFF",
    "fillColors": "#8d003b",
    "fillAlphas": 0.8,
    "valueField": "value1"
  }, {
    "type": "column",
    "topRadius": 1,
    "columnWidth": 1,
    "showOnAxis": true,
    "lineThickness": 2,
    "lineAlpha": 0.5,
    "lineColor": "#cdcdcd",
    "fillColors": "#cdcdcd",
    "fillAlphas": 0.5,
    "valueField": "value2"
  } ],

  "categoryField": "category",
  "categoryAxis": {
    "axisAlpha": 0,
    "labelOffset": 40,
    "gridAlpha": 0
  }
} );

*/
    this.TankGauge = this._tankGaugeService.getData();
  }

/*
  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }
*/
  private _loadTankGaugeService() {
    this.TankGauge = this._tankGaugeService.getData();
  }
}


/* add dependencies to dashboard.module.ts:
import { TankGauge } from './tankgauge';
import { TankGaugeService } from './tankgauge/tankgauge.service';

@NgModule({
  imports: [
  ],
  declarations: [
    TankGauge
  ],
  providers: [
    TankGaugeService
  ]
})
, add selector to app/assets/i18n/US/en.json 
"dashboard": {
    "tankgauge": "Tank Gauge"
    }

*/
