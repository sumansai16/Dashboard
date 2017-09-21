 declare var require: any;
  
  import {
    Component,
    ElementRef,
    AfterViewInit,
    OnDestroy,
    ViewChild
} from '@angular/core';

const Highcharts = require('highcharts/highcharts.src');
import 'highcharts/adapters/standalone-framework.src';

@Component({
  selector: 'app-multi-linechart',
  templateUrl: './multi-linechart.component.html',
  styleUrls: ['./multi-linechart.component.scss']
})

export class MultiLinechartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chart1') public chartEl: ElementRef;
  
  private _chart: any;
  
  private randomValue() {
    return Math.floor(Math.random() * 10) + 0;
  }

  constructor() {
   // const me = this;
    
  // To add random points to series data
  // ***********************************
//     setInterval(function () {
//       if (me._chart) {
//         me._chart['series'][0].addPoint([(new Date()).getTime(), me.randomValue()], true, true);
//       }
//     }, 2000);
  
 }
  
  public ngAfterViewInit() {
    let opts: any = {

      // title : { text : 'simple chart' },
      //       tooltip: {
      //           shared: true
      //       },
      //       yAxis: [{
      //           title: {
      //               text: 'OHLC'
      //           },
      //           height: 200,
      //           lineWidth: 2
      //       }, {
      //           title: {
      //               text: 'Volume'
      //           },
      //           top: 300,
      //           height: 400,
      //           offset: 0,
      //           lineWidth: 2
      //       }],
      //       series: [{
      //           data: [29.9, 71.5, 106.4, 129.2],
      //           yAxis : 0,
      //       }, { 
      //         data : [ 10, 12, 14, 15],
      //         yAxis : 1
              
      //         }
      //       ]


        chart: {
                    marginLeft: 40, // Keep all charts left aligned
                    spacingTop: 20,
                    spacingBottom: 20,
                     type: 'line',           
              zoomType: 'x',
              height: 700,                  

            //Theme of chart
              backgroundColor: "#18252E",
              style: {
                  fontFamily: '\'Unica One\', sans-serif'
              },
              plotBorderColor: '#606063'
                },            
            title: {
              text: 'ESP Chart',
               style: {
                display: 'block',
                color: 'Green',
                textTransform: 'uppercase',
                fontSize: '14px'
              }               
            },
            tooltip: {
              shared: true,  
              xDateFormat: '%Y',  
              valueDecimals: 0,
              crosshairs: true,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    style: {
                        color: '#F0F0F0'
                    }
            },          
          xAxis: {
          crosshair: true,
          type: 'datetime',
          dateTimeLabelFormats: {
            year: '%Y'
          },
          title: {
            text: 'Date',
          }
        },
         yAxis: [{
                title: {
                    text: 'Pressure'
                },
                height: 150,
                top:70,
                lineWidth: 2
            }, {
                title: {
                    text: 'Temperature'
                },
                top: 240,
                height: 100,
                offset: 0,
                lineWidth: 2
            }],
          legend: {
                align: 'center',
                verticalAlign: 'top',
                layout: 'vertical',
                x: 10,
                y: 0,

               itemStyle: {
                 color: '#ffffff',
                 fontSize: '14px'
               }
          },
          labels: {
            enabled: true,
          },

          plotOptions: {
              series: {
                  pointStart: 2050,
                  color: '#2B908F',
                  marker: {
                enabled: true
              }
              }
          },

          series: [
              
{ name: 'Pressure',color: '#25D366', data: [[Date.UTC(1970, 9, 21),2],[Date.UTC(1970, 10, 4), 12],[Date.UTC(1970, 10, 9), 5],[Date.UTC(1970, 11, 2), 18],[Date.UTC(1971, 1, 3), 13]], yAxis:0 },
{ name: 'Temperature', color: '#3b5998',data:[[Date.UTC(1970, 9, 21), 4],[Date.UTC(1970, 10, 4), 12],[Date.UTC(1970, 10, 9), 6],[Date.UTC(1970, 11, 26), 15],[Date.UTC(1971, 1, 25), 3]], yAxis:1 },
          ]
 

        // winter series mock Time data with irregular intervals
    //     series: [{
    //     name: 'Winter 2012-2013',
    //     // Define the data points. All series have a dummy year
    //     // of 1970/71 in order to be compared on the same x axis. Note
    //     // that in JavaScript, months start at 0 for January, 1 for February etc.
    //     data: [
    //         [Date.UTC(1970, 9, 21), 0],
    //         [Date.UTC(1970, 10, 4), 0.28],
    //         [Date.UTC(1970, 10, 9), 0.25],
    //         [Date.UTC(1970, 10, 27), 0.2],
    //         [Date.UTC(1970, 11, 2), 0.28],
    //         [Date.UTC(1970, 11, 26), 0.28],
    //         [Date.UTC(1970, 11, 29), 0.47],
    //         [Date.UTC(1971, 0, 11), 0.79],
    //         [Date.UTC(1971, 0, 26), 0.72],
    //         [Date.UTC(1971, 1, 3), 1.02],
    //         [Date.UTC(1971, 1, 11), 1.12],
    //         [Date.UTC(1971, 1, 25), 1.2],
    //         [Date.UTC(1971, 2, 11), 1.18],
    //         [Date.UTC(1971, 3, 11), 1.19],
    //         [Date.UTC(1971, 4, 1), 1.85],
    //         [Date.UTC(1971, 4, 5), 2.22],
    //         [Date.UTC(1971, 4, 19), 1.15],
    //         [Date.UTC(1971, 5, 3), 0]
    //     ]
    // }, {
    //     name: 'Winter 2013-2014',
    //     data: [
    //         [Date.UTC(1970, 9, 29), 0],
    //         [Date.UTC(1970, 10, 9), 0.4],
    //         [Date.UTC(1970, 11, 1), 0.25],
    //         [Date.UTC(1971, 0, 1), 1.66],
    //         [Date.UTC(1971, 0, 10), 1.8],
    //         [Date.UTC(1971, 1, 19), 1.76],
    //         [Date.UTC(1971, 2, 25), 2.62],
    //         [Date.UTC(1971, 3, 19), 2.41],
    //         [Date.UTC(1971, 3, 30), 2.05],
    //         [Date.UTC(1971, 4, 14), 1.7],
    //         [Date.UTC(1971, 4, 24), 1.1],
    //         [Date.UTC(1971, 5, 10), 0]
    //     ]
    // }, {
    //     name: 'Winter 2014-2015',
    //     data: [
    //         [Date.UTC(1970, 10, 25), 0],
    //         [Date.UTC(1970, 11, 6), 0.25],
    //         [Date.UTC(1970, 11, 20), 1.41],
    //         [Date.UTC(1970, 11, 25), 1.64],
    //         [Date.UTC(1971, 0, 4), 1.6],
    //         [Date.UTC(1971, 0, 17), 2.55],
    //         [Date.UTC(1971, 0, 24), 2.62],
    //         [Date.UTC(1971, 1, 4), 2.5],
    //         [Date.UTC(1971, 1, 14), 2.42],
    //         [Date.UTC(1971, 2, 6), 2.74],
    //         [Date.UTC(1971, 2, 14), 2.62],
    //         [Date.UTC(1971, 2, 24), 2.6],
    //         [Date.UTC(1971, 3, 2), 2.81],
    //         [Date.UTC(1971, 3, 12), 2.63],
    //         [Date.UTC(1971, 3, 28), 2.77],
    //         [Date.UTC(1971, 4, 5), 2.68],
    //         [Date.UTC(1971, 4, 10), 2.56],
    //         [Date.UTC(1971, 4, 15), 2.39],
    //         [Date.UTC(1971, 4, 20), 2.3],
    //         [Date.UTC(1971, 5, 5), 2],
    //         [Date.UTC(1971, 5, 10), 1.85],
    //         [Date.UTC(1971, 5, 15), 1.49],
    //         [Date.UTC(1971, 5, 23), 1.08]
    //     ]
   // }]

    };
    
    if (this.chartEl && this.chartEl.nativeElement) {
        opts.chart = {
            type: 'spline',
            renderTo: this.chartEl.nativeElement
        };

        this._chart = new Highcharts.Chart(opts);
    }
  }
  
  public ngOnDestroy() {
    this._chart.destroy();
  }
}