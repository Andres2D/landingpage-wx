import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { StartComponent } from './components/start/start.component';
import { WoloxersComponent } from './components/woloxers/woloxers.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { BenefitCardComponent } from './components/benefit-card/benefit-card.component';
import { EndingComponent } from './components/ending/ending.component';


@NgModule({
  declarations: [MainComponent, StartComponent, WoloxersComponent, BenefitsComponent, BenefitCardComponent, EndingComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
