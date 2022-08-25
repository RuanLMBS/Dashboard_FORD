import { switchMap, map,first } from 'rxjs/operators';
import { NovoVeiculoService } from './../novo-veiculo.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class VeiculoidExisteService {

  constructor(private novoVeiculoService: NovoVeiculoService) { }

  veiculoIdJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((id)=>
          this.novoVeiculoService.verificaIdExistente(id)
          ),
        map((idExiste)=>
        idExiste ? {idExistente : true} : null
        ),
        first()
      );

    };
  };
}
