import { NovoVeiculo } from './novo-veiculo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NovoVeiculoService {

  constructor(private http:HttpClient) { }
  cadastraNovoVeiculo (NovoVeiculo:NovoVeiculo) {
    return this.http.post('http://localhost:3000/vehicledata/signup', NovoVeiculo)
  }

  verificaIdExistente(id:string) {
    return this.http.get(`http://localhost:3000/vehicledata/exists/${id}`)
  }
}
