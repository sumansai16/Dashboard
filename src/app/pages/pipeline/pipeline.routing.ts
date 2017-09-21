import { Routes, RouterModule }  from '@angular/router';

import { Pipeline } from './pipeline.component';
import { PlainsCDP } from './plainscdp/plainscdp.component';
import { Radios } from './plainscdp/radios/radios.component';
import { WesternCDP } from './westerncdp/westerncdp.component';

import { RustlerBluff } from './rustlerbluff/rustlerbluff.component';
import { AccLACT } from './acclact/acclact.component';
import { Plu421 } from './plu421/plu421.component';
import { BigSinks } from './bigsinks/bigsinks.component';
import { HastaLaVista } from './hastalavista/hastalavista.component';
import { DrillIsland4 } from './drillisland4/drillisland4.component';
import { DrillIsland5 } from './drillisland5/drillisland5.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Pipeline,
    children: [
      { path: 'plainscdp', component: PlainsCDP }, 
      { path: 'plainscdp/radios', component: Radios }, 
      { path: 'westerncdp', component: WesternCDP }, 
      { path: 'rustlerbluff', component: RustlerBluff }, 
      { path: 'acclact', component: AccLACT }, 
      { path: 'plu421', component: Plu421 }, 
      { path: 'bigsinks', component: BigSinks }, 
      { path: 'hastalavista', component: HastaLaVista }, 
      { path: 'drillisland4', component: DrillIsland4 }, 
      { path: 'drillisland5', component: DrillIsland5 }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
