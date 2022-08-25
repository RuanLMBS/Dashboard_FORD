import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NovoVeiculoComponent } from './novo-veiculo.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoVeiculoRoutingModule } from './novo-veiculo-routing.module';


@NgModule({
  declarations: [
    NovoVeiculoComponent,
  ],
  imports: [
    CommonModule,
    NovoVeiculoRoutingModule,
    CabecalhoModule,
    ReactiveFormsModule,
    MensagemModule,
  ],
  exports: [
    NovoVeiculoComponent,
  ]
})
export class NovoVeiculoModule { }
