import { DashboardModule } from './../dashboard/dashboard.module';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { CabecalhoComponent } from './../componentes/cabecalho/cabecalho.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CabecalhoModule,
  ]
})
export class HomeModule { }
