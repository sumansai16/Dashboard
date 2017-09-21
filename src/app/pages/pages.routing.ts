import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'pipeline', loadChildren: './pipeline/pipeline.module#PipelineModule' },
      { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      { path: 'ui', loadChildren: './ui/ui.module#UiModule' } ,
      { path: 'test', loadChildren: './test/test.module#TestModule' },

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
