// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { NgModule, Component, OnInit, OnDestroy }    from '@angular/core';
// import { Http, Response,HttpModule } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import { BrowserModule }          from '@angular/platform-browser';
// import { ChartModule }            from 'angular2-highcharts'; 
// import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
// import { AmChartsService, AmChartsModule } from '@amcharts/amcharts3-angular';

// @Component({
//     selector: 'line-amchart',
//     styles: [`
//       #chartdiv {
// 	  width: 300px;
//     min-width: 150px;
//     font-size: 11px;
//     height: 275px;
//     max-height: 500px;
//     min-height:200px;
// }		
//   `],
//     template: `
//     <div id='chartdiv'></div>
//     `
// })
// export class LineChartComponent implements OnDestroy, OnInit {
//     private charts: any;
//     private timer: any;
//     jsonlist: any;
//     datalist: any;
//     tankLevelValue: any;
//     result: Observable<any>;
//     resp: any;

    
// constructor(private AmCharts: AmChartsService, private _http: Http) {
// Observable.interval(100).flatMap(() => {
//           return this._http.get('http://nextapi-xto.azurewebsites.net/api/RodPumpDemo/GetRodPumpCosmo')
//           })
//           .subscribe((response)=>{
//              this.jsonlist = response.json();
//              this.datalist = this.jsonlist[0];
//     }
//     }
  
  
// ngOnInit() { 

//  this.charts = this.AmCharts.makeChart('chartdiv', {
//     'type': 'serial',
//     'depth3D':100,
//     'angle':30,
//   'pathToImages': 'https://www.amcharts.com/lib/3/images/',
//     'dataProvider': this.generateChartData(),
//     'valueAxes': [{
//         'stackType': '100%',
//         'gridAlpha': 0,

//         min : 0,
//         max : 192
//         //'maximum':193
//        // 'strictMinMax':true
//     }],
//     'graphs': [{
//         'type':'column',
//         'topRadius':1,
//         'columnWidth':1,
//         'showOnAxis':true,
//         'lineThickness': 2,
//         'lineAlpha': 0.5,
//         'lineColor': '#FFFFFF',
//         'fillColors': 'green',
//         'fillAlphas': 0.8,
//         'valueField': 'value1',
//         },{
//         'type':'column',
//         'topRadius':1,
//         'columnWidth':1 ,
//         'showOnAxis':true,
//         'lineThickness': 2,
//         'lineAlpha': 0.5,
//         'lineColor': '#cdcdcd',
//         'fillColors': '#cdcdcd',
//         'fillAlphas': 0.5,
//         'valueField': 'value2',
//     }],
//     'responsive': {
//       'enabled' : true
//     },
//     'categoryField': 'category',
//     'categoryAxis': {
//         autoGridCount : false,
//         gridCount : 10,
//         'axisAlpha': 0,
//         'labelOffset':20,
//         'gridAlpha':0
//     }
// });
// /*
// this.charts.chartBackground.css({
// background:'transaparent !important'
// });
// */
// /* Update chart for every 1sec */
//     this.timer = setInterval(() => {
//       // This must be called when making any changes to the chart
//       this.AmCharts.updateChart(this.charts, () => {
//         this.charts.dataProvider = this.generateChartData();
       
//       });
//     }, 100);
// }

// generateChartData(){     
//      let chartData: any= [];
//     let tanklevelVal1 : any;
//     let tanklevelVal2 : any;
//     tanklevelVal1 =  this.jsonlist ? this.jsonlist[0].tanklevel : 0 ;
//     tanklevelVal2 = ( tanklevelVal1 > 192)? 0 : (192 - tanklevelVal1) ;
//      chartData.push({'category':'Oil Level in the Tank', 'value1': tanklevelVal1 ,'value2': tanklevelVal2 });
//      // chartData.push({'category':'Oil Level in the Tank', 'value1': 295 ,'value2':193   });
//      return chartData;
//    };

// ngOnDestroy() {
//       clearInterval(this.timer);
//     this.AmCharts.destroyChart(this.charts);
// }

// }



import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule, Component, OnInit, OnDestroy } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { BrowserModule } from '@angular/platform-browser';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';
import { AmChartsService, AmChartsModule } from '@amcharts/amcharts3-angular';
@Component({
    selector: 'nga-line-amchart',
    styles: [`
      #chartdiv {
	  width: 100%;
    min-width: 150px;
    font-size: 11px;
    height: 500px;
    max-height: 500px;
    min-height:200px;
}		
  `],
    template: `
    <div id='chartdiv'></div>
    `,
})
export class LineChartComponent implements OnInit{
    private charts: any;
    private timer: any;
    jsonlist: any;
    datalist: any;
    tankLevelValue: any;
    result: Observable<any>;
    resp: any;

    
constructor(private amCharts: AmChartsService, private _http: Http) { }

ngOnInit(){

const chartData = this.generateChartData();
this.charts = this.amCharts.makeChart('chartdiv', {
    'type': 'serial',
    'theme': 'light',
    'legend': {
        'useGraphSettings': true,
    },
    'dataProvider': chartData,
    'synchronizeGrid': true,
    'valueAxes': [{
        'id': 'v1',
        'axisColor': '#FF6600',
        'axisThickness': 2,
        'axisAlpha': 1,
        'position': 'left',
    }, {
        'id': 'v2',
        'axisColor': '#FCD202',
        'axisThickness': 2,
        'axisAlpha': 1,
        'position': 'right',
    }, {
        'id': 'v3',
        'axisColor': '#B0DE09',
        'axisThickness': 2,
        'gridAlpha': 0,
        'offset': 50,
        'axisAlpha': 1,
        'position': 'left',
    }],
    'graphs': [{
        'valueAxis': 'v1',
        'lineColor': '#FF6600',
        'bullet': 'round',
        'bulletBorderThickness': 1,
        // 'bulletBorderAlpha': 1,
        // 'useLineColorForBulletBorder': true,
        // 'bulletSize': 8,
        'type': 'smoothedLine',
        'hideBulletsCount': 50,
        'title': 'winter 2012-2013',
        'valueField': 'visits',
        'fillAlphas': 0,
    }, {
        'valueAxis': 'v2',
        'lineColor': '#FCD202',
        'bullet': 'square',
        'bulletBorderThickness': 1,
        'bulletBorderAlpha': 1,
        'useLineColorForBulletBorder': true,
        'bulletSize': 8,
        'type': 'smoothedLine',
        'hideBulletsCount': 50,
        'title': 'winter 2013-2014',
        'valueField': 'hits',
        'fillAlphas': 0,
    }, {
        'valueAxis': 'v3',
        'lineColor': '#B0DE09',
        'bullet': 'triangleUp',
        'bulletBorderThickness': 1,
        'bulletBorderAlpha': 1,
        'useLineColorForBulletBorder': true,
        'bulletSize': 8,
        'type': 'smoothedLine',
        'hideBulletsCount': 50,
        'title': 'winter 2014-2015',
        'valueField': 'views',
        'fillAlphas': 0,
    }],
    'chartScrollbar': {},
    'chartCursor': {
        'cursorPosition': 'mouse',
    },
    'categoryField': 'date',
    'categoryAxis': {
        'parseDates': true,
        'axisColor': '#DADADA',
        'minorGridEnabled': true,
    },
    'responsive': {
      'enabled' : true,     
    },
    'export': {
        'enabled': true,
        'position': 'bottom-right',
     },
});
this.charts.addListener('dataUpdated', this.zoomChart);
this.zoomChart(this.charts, this.charts.dataProvider);

}
zoomChart(charting, chartData): void {
  //  charting.zoomToIndexes(charting.dataProvider.length - 20, charting.dataProvider.length - 1);
}

// generate some random data, quite different range
generateChartData() {
    let chartData = [];
    const firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);
        let visits = 1600;
        let hits = 2900;
        let views = 8700;


    for (let i = 0; i < 100; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        const newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        hits += Math.round((Math.random() < 0.5 ? 1 : -1 ) * Math.random() * 10);
        views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

        chartData.push({
            date: newDate,
            visits: visits,
            hits: hits,
            views: views,
        });
    }
    return chartData;
}

}