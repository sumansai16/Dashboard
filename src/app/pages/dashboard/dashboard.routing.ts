import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';
import { TreeView } from '../components/components/treeView/treeView.component';


// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
    //  { path: 'treeview', component: TreeView }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
