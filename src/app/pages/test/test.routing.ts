import { Routes, RouterModule }  from '@angular/router';

import { TestComponent } from './test.component';
import { ModuleWithProviders } from '@angular/core';
import { TreeView } from '../components/components/treeView/treeView.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
     // { path: 'treeview', component: TreeView }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
