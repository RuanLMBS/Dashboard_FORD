import { LoginGuard } from './autenticacao/login.guard';
import { GuardaAutenticacaoGuard } from './autenticacao/guarda-autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    loadChildren:() => import('./login/login.module').then((m)=>m.LoginModule),
    canLoad: [LoginGuard],
  },
  {
    path:'home',
    loadChildren:() => import('./home/home.module').then((m)=>m.HomeModule),
    canLoad:[GuardaAutenticacaoGuard],
  },
  {
    path:'dashboard',
    loadChildren:() => import ('./dashboard/dashboard.module').then((m)=>m.DashboardModule),
    canLoad:[GuardaAutenticacaoGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
