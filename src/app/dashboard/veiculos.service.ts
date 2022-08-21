import { veiculoDados, VeiculosDados } from './vehicle-data';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck, filter, tap, debounceTime } from 'rxjs';
import { Veiculos, Veiculo, VeiculosAPI } from './veiculos';
import { VeiculosDataAPI } from './vehicle-data'

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  public pegaVeiculo() {
    return this.http.get<any>(`http://localhost:3000/vehicle/`)
  }

  public pegaVehicleData(valor?: string) {
    const params=valor?new HttpParams().append('valor',valor) : undefined
    return this.http.get<any>("http://localhost:3000/vehicleData/", {params}).pipe(
      map(res=>res.vehicleData))
  }

  constructor(private http:HttpClient) { }


}
