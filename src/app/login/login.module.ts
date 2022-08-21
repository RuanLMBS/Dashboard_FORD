import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LogarComponent } from './logar/logar.component';
import { FormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';


@NgModule({
  declarations: [LoginComponent, LogarComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    MensagemModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
