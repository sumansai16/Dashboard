import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';


import { routing } from './pipeline.routing';
import { Pipeline } from './pipeline.component';

import { TagCard } from './components/tagcard';
import { TagCardService } from './components/tagcard/tagcard.service';

import { TankGauge } from './components/tankgauge';
import { TankGaugeService } from './components/tankgauge/tankgauge.service';
import { TankChart } from './components/tankgauge/tankchart';

import { StatusCard } from './components/statuscard';
import { StatusCardService } from './components/statuscard/statuscard.service';

import { PropertyCard } from './components/propertycard';
import { PropertyCardService } from './components/propertycard/propertycard.service';

import { PlainsCDP } from './plainscdp/plainscdp.component';
import { Radios } from './plainscdp/radios/radios.component'; 
import { WesternCDP } from './westerncdp/westerncdp.component';

import { RustlerBluff } from './rustlerbluff/rustlerbluff.component';
import { AccLACT } from './acclact/acclact.component';
import { BigSinks } from './bigsinks/bigsinks.component';
import { DrillIsland4 } from './drillisland4/drillisland4.component';
import { DrillIsland5 } from './drillisland5/drillisland5.component';
import { HastaLaVista } from './hastalavista/hastalavista.component';
import { Plu421 } from './plu421/plu421.component';


import { PlainsDataService } from './plainscdp/plainscdp.service';
import { RadiosDataService } from './plainscdp/radios/radios.service';
import { WesternDataService } from './westerncdp/westerncdp.service';

import { RustlerBluffDataService } from './rustlerbluff/rustlerbluff.service';
import { AccLACTDataService } from './acclact/acclact.service';
import { BigSinksDataService } from './bigsinks/bigsinks.service';
import { DrillIsland4DataService } from './drillisland4/drillisland4.service';
import { DrillIsland5DataService } from './drillisland5/drillisland5.service';
import { HastaLaVistaDataService } from './hastalavista/hastalavista.service';
import { Plu421DataService } from './plu421/plu421.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  declarations: [
    Pipeline,
    PlainsCDP,
    WesternCDP,
    TagCard,
    TankGauge,
    TankChart,
    StatusCard,
    PropertyCard,
    RustlerBluff,
    AccLACT,
    BigSinks,
    DrillIsland4,
    DrillIsland5,
    HastaLaVista,
    Plu421,
    Radios,
  ],
  providers: [
    PlainsDataService,
    WesternDataService,
    TagCardService,
    TankGaugeService,
    StatusCardService,
    PropertyCardService,
    RustlerBluffDataService,
    AccLACTDataService,
    BigSinksDataService,
    DrillIsland4DataService,
    DrillIsland5DataService,
    HastaLaVistaDataService,
    Plu421DataService,
    RadiosDataService,
  ]
})
export class PipelineModule {}