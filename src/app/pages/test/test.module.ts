import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';

import { TestComponent } from './test.component';
import { routing } from './test.routing';
import { TreeView } from '../components/components/treeView/treeView.component';

import { TreeModule } from 'angular-tree-component';
//import { TreeModule } from 'ng2-tree';


import { TestDataService } from './test.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing,
    TreeModule,
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
    TestComponent,
//    TreeView,

  ],
  providers: [
    TestDataService
  ]
})
export class TestModule {}
