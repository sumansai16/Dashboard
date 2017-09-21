import { Component, Input } from '@angular/core';
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
  @Input() nValue: string;
  @Input() dValue: Array<Object>;
  @Input() unit: number;


  constructor(private AmCharts: AmChartsService) {
  }

//use for dynamic charts else they will not appear on page toggle.
  ngAfterViewInit() {
    

    //alert(this.chartId + ' ' + this.cValue + ' ' +  this.mValue + ' ' +  this.unit);
    
    this.chart = this.AmCharts.makeChart( this.chartId, {
    "theme": "dark",
    "type": "serial",
    "depth3D": 0,
    "angle": 0,
    "autoMargins": true,
    "dataProvider": [ {
    "category": this.nValue,
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
    
  }

  ngOnDestroy() {
    
    this.AmCharts.destroyChart(this.chart);
  
  }

  expandMessage (message){
    message.expanded = !message.expanded;
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
