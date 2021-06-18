import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./screens/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./screens/list/list.module').then( m => m.ListModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./screens/main/main.module').then( m => m.MainModule)
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
