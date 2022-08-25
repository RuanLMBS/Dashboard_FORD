import { FormControl } from '@angular/forms';
import { VeiculosService } from './../veiculos.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { switchMap, filter, debounceTime, tap, distinctUntilChanged, merge, pluck } from 'rxjs';


@Component({
  selector: 'app-vehicle-data',
  templateUrl: './vehicle-data.component.html',
  styleUrls: ['./vehicle-data.component.css']
})
export class VehicleDataComponent {
  acoesInput = new FormControl();
  inputVeiculo: string;
  todosVeiculos$ = this.VeiculosService.pegaVehicleData().pipe(
    tap(console.log)
  );
  filtraVeiculosPeloInput$ = this.acoesInput.valueChanges.pipe(switchMap((valorDigitado)=>this.VeiculosService.pegaVehicleData(valorDigitado)))

  veiculos$ = this.acoesInput.valueChanges.pipe(
    debounceTime(300),
    filter((valorDigitado) => valorDigitado.length>=3 || !valorDigitado.length),
    distinctUntilChanged(),
    tap(console.log),
    switchMap((valorDigitado)=>this.VeiculosService.pegaVehicleData(valorDigitado)),
    );
  acoes$ = merge(this.todosVeiculos$,this.filtraVeiculosPeloInput$)
  constructor(private http: HttpClient, private VeiculosService: VeiculosService) { }

}
