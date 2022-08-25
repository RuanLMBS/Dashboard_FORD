import { tap, toArray } from 'rxjs/operators';
import { Observable, subscribeOn, Subscription } from 'rxjs';
import { VeiculosService } from './../veiculos.service';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Veiculo, Veiculos, VeiculosAPI } from './../veiculos';
import { Usuario } from './../../autenticacao/usuario/usuario';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { FormControl } from '@angular/forms';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy {
  @Input() veiculos: Veiculos;
  veiculosInput = new FormControl();
  veiculos$ = this.veiculosInput.valueChanges.pipe(tap(console.log))


  readonly apiURL : string;
  imagem$:any;
  veiculoSelecionado: Veiculo;
  imagem: string;


  constructor(private http: HttpClient, private VeiculosService: VeiculosService) {
    this.apiURL = 'http://localhost:3000';
   }


   mostraImagem(){
    if(this.veiculoSelecionado) {
      this.imagem$=this.veiculoSelecionado.vehicle.toLowerCase();
      this.imagem=`./../../../assets/img/${this.imagem$}.png`
    }
   }
   private subscription: Subscription

  ngOnInit(): void {
    this.subscription = this.VeiculosService.pegaVeiculo().subscribe((retornoApi)=>this.veiculos=retornoApi.vehicles)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
