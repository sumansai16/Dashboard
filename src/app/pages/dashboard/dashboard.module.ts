import { NgModule }      from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

//import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {ToastyModule} from 'ng2-toasty';

import { Dashboard } from './dashboard.component';
import { routing } from './dashboard.routing';
import { AlarmComponentComponent } from './alarm-component/alarm-component.component';

// import { PopularApp } from './popularApp';
// import { PieChart } from './pieChart';
// import { TrafficChart } from './trafficChart';
// import { UsersMap } from './usersMap';
// import { LineChart } from './lineChart';
// import { Feed } from './feed';
// import { Todo } from './todo';
// import { Calendar } from './calendar';
// import { CalendarService } from './calendar/calendar.service';
// import { FeedService } from './feed/feed.service';
// import { LineChartService } from './lineChart/lineChart.service';
// import { PieChartService } from './pieChart/pieChart.service';
// import { TodoService } from './todo/todo.service';
// import { TrafficChartService } from './trafficChart/trafficChart.service';
// import { UsersMapService } from './usersMap/usersMap.service';
 
import { TagCard } from './tagcard';
import { TagCardService } from './tagcard/tagcard.service';

import { TankGauge } from './tankgauge';
import { TankGaugeService } from './tankgauge/tankgauge.service';
import { TankChart } from './tankgauge/tankchart';
import { TankChartService } from './tankgauge/tankchart/tankchart.service';
import { LineChartComponent } from './lineChart/lineChart.component';
import { InfiniteScrollerDirective } from './alarm-component/infinite-scroller.directive';
import { HackerNewsService } from './alarm-component/hacker-news.service';
import { HighChartComponent } from './high-chart/high-chart.component';
import { MultiLinechartComponent } from './multi-linechart/multi-linechart.component';
import { AlertNotificationsComponent } from './alert-notifications/alert-notifications.component';
import { ToastCommunicationService } from './alert-notifications/toast-communication.service';

// import { AlertNotificationsComponent } from './alert-notifications/alert-notifications.component';
// import { ToastyModule } from 'ng2-toasty';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
   // BrowserModule,
    HttpModule,
    ToastyModule.forRoot(),
  ],
  declarations: [
    // PopularApp,
    // PieChart,
    // TrafficChart,
    // UsersMap,
    // LineChart,
    // Feed,
    // Todo,
    // Calendar,
    Dashboard,
    TagCard,
    TankGauge,
    TankChart,
    LineChartComponent,
    InfiniteScrollerDirective,
    AlarmComponentComponent,
    HighChartComponent,
    MultiLinechartComponent,
    AlertNotificationsComponent,
  ],
  providers: [
    // CalendarService,
    // FeedService,
    // LineChartService,
    // PieChartService,
    // TodoService,
    // TrafficChartService,
    // UsersMapService,
    TagCardService,
    TankGaugeService,
    TankChartService,
    HackerNewsService,
    /*{ provide: LocationStrategy, useClass: HashLocationStrategy },*/ ToastCommunicationService,
  ],
})
export class DashboardModule {}
