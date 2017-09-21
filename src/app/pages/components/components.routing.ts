import { Routes, RouterModule }  from '@angular/router';

import { Components } from './components.component';
import { TreeView } from './components/treeView/treeView.component';
import { FullTreeComponent } from './components/full-tree/full-tree.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Components,
    children: [
     // { path: 'treeview', component: TreeView },
      { path: 'fulltree', component: FullTreeComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
