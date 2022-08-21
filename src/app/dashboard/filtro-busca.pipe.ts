import { filter, pipe, debounceTime } from 'rxjs';
import { Veiculos } from './veiculos';
import { veiculoDados, VeiculosDados } from './vehicle-data';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroBusca'
})
export class FiltroBuscaPipe implements PipeTransform {

  transform(VeiculosDados: veiculoDados[], veiculoSelecionado: string): veiculoDados[] {
    if(!VeiculosDados || !veiculoSelecionado) {

      return VeiculosDados;
    }
    debounceTime(300);
    return VeiculosDados.filter(veiculoDados => veiculoDados.vin.includes(veiculoSelecionado))

  }

 }
