import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
//import { TreeModule } from 'ng2-tree';
import { TreeModule } from 'angular-tree-component';

import { routing }       from './components.routing';
import { Components } from './components.component';
//import { TreeView } from './components/treeView/treeView.component';
import { FullTreeComponent } from './components/full-tree/full-tree.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    TreeModule,
    routing
  ],
  declarations: [
    Components,
    //TreeView,
    FullTreeComponent,
    AgGridComponent,
  ]
})
export class ComponentsModule {}
