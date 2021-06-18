import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './pages/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './pipes/custom.pipe';


@NgModule({
  declarations: [ListComponent, CustomPipe],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
