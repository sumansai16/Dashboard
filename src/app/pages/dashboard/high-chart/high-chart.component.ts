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
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.scss']
})

export class HighChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('chart') public chartEl: ElementRef;
  
  private _chart: any;
  
  private randomValue() {
    return Math.floor(Math.random() * 10) + 0;
  }

  constructor() {
    const me = this;
    
  // To add random points to series data
  // ***********************************
    setInterval(function () {
      if (me._chart) {
        (me._chart['series'])? me._chart['series'][0].addPoint([(new Date()).getTime(), me.randomValue()], true, true) : "";
      }
    }, 2000);
  
 }
  
  public ngAfterViewInit() {
    let opts: any = {
        title: {
          text: 'ESP Chart',
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: { // don't display the dummy year
             month: '%e. %b',
             year: '%b'
          },
          tickPixelInterval: 150,
          title: {
            text: 'Date'

          }
          },
          yAxis: {
          title: {
            text: 'Snow depth (m)'
          },
          min: 0
          },
          tooltip: {
          headerFormat: '<b>{series.name}</b><br>',
          pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
          },
          plotOptions: {
          spline: {
            marker: {
                enabled: true
              }
            }
          },
        //simple line chart series data (maximelafarie)
       // https://stackoverflow.com/questions/38971753/json-data-with-angular2-highcharts
          series: [{
          name: 'Random data',
          data: (function () {
              // generate an array of random data
              var data = [],
                  time = (new Date()).getTime(),
                  i;

              for (i = -19; i <= 0; i += 1) {
                  data.push({
                      x: time + i * 1000,
                      y: Math.floor(Math.random() * 10) + 0
                  });
              }
              return data;
          }())
        }]

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