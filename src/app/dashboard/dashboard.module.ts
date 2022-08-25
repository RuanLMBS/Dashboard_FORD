import { FormsModule } from '@angular/forms';
import { AutenticacaoService } from './../autenticacao/autenticacao.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from '../home/home.module';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { VehicleDataComponent } from './vehicle-data/vehicle-data.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    VehicleDataComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CabecalhoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
