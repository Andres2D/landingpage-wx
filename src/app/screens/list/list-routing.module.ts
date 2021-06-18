import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
