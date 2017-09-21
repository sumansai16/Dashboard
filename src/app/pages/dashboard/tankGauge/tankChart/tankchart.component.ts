import { Component, Input } from '@angular/core';

import { TankChartService } from './tankchart.service';
import { AmChartsService } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'tankchart',
  templateUrl: './tankchart.html',
  styleUrls: ['./tankchart.scss']
})
export class TankChart {
  //private timer: NodeJS.Timer;
  public chart: any;
  public TankChart:Array<Object>;
  @Input() chartId: string;
  @Input() cValue: number;
  @Input() mValue: number;
  @Input() unit: number;


  constructor(private _tankChartService:TankChartService, private AmCharts: AmChartsService) {
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

    
    
    this.chart = this.AmCharts.makeChart( this.chartId, {
    "theme": "dark",
    "type": "serial",
    "depth3D": 0,
    "angle": 0,
    "autoMargins": true,
    "dataProvider": [ {
    "category": "Tank Level",
    "value1": this.cValue,
    "value2": this.mValue - this.cValue
  } ],
  "valueAxes": [ {
    "stackType": "regular",
    "gridAlpha": 0,
    "maximum": this.mValue
  } ],
  "graphs": [ {
    "type": "column",
    "topRadius": 1,
    "columnWidth": 1,
    "showOnAxis": true,
    "lineThickness": 2,
    "lineAlpha": 0.5,
    "lineColor": "#FFFFFF",
    "fillColors": "#0b8201",
    "fillAlphas": 0.5,
    "valueField": "value1",
    "labelText": this.cValue + ' ' + this.unit,
    "color": "#FFFFFF",
  }, {
    "type": "column",
    "topRadius": 1,
    "columnWidth": 1,
    "showOnAxis": true,
    "lineThickness": 2,
    "lineAlpha": 0,
    "lineColor": "#cc0000",
    "fillColors": "#cc0000",
    "fillAlphas": 0,
    "valueField": "value2"
  } ],

  "categoryField": "category",
  "categoryAxis": {
    "axisAlpha": 0,
    "labelOffset": 40,
    "gridAlpha": 0,
  }
} );


    this.TankChart = this._tankChartService.getData();
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadTankChartService() {
    this.TankChart = this._tankChartService.getData();
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
    "tank_gauge": "Tank Gauge"
    }

*/
