import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { StartComponent } from './components/start/start.component';
import { WoloxersComponent } from './components/woloxers/woloxers.component';


@NgModule({
  declarations: [MainComponent, StartComponent, WoloxersComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
