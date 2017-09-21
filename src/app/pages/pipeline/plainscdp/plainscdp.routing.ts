import { Routes, RouterModule }  from '@angular/router';

import { PlainsCDP } from './plainscdp.component';
import { Radios } from './radios/radios.component';


export const routes: Routes = [
  {
    path: '',
    component: PlainsCDP,
    children: [
      { path: 'radios', component: Radios }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
