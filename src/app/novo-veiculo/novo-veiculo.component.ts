import { Router } from '@angular/router';
import { VeiculoidExisteService } from './novoVeiculo/veiculoid-existe.service'
import { NovoVeiculoService } from './novo-veiculo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoVeiculo } from './novo-veiculo';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.css']
})
export class NovoVeiculoComponent implements OnInit {
  novoVeiculoForm: FormGroup;
  constructor(private formBuilder:FormBuilder,
    private VeiculoIdExiste:VeiculoidExisteService,
    private NovoVeiculoService:NovoVeiculoService,
    private router:Router,
    ) { }

  apenasNumeros (event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {
    this.novoVeiculoForm = this.formBuilder.group({
      id:['',
      [Validators.required],
      [this.VeiculoIdExiste.veiculoIdJaExiste()]],
      vin:['',[Validators.required,
       Validators.minLength(20)]],
      odometer:['',[Validators.required]],
      tirePressure:['',[Validators.required]],
      status:['',[Validators.required]],
      batteryStatus:['',[Validators.required]],
      fuelLevel:['',[Validators.required]],
      lat:['',[Validators.required]],
      long:['',[Validators.required]],
    })
  }
  cadastrar () {
    if (this.novoVeiculoForm.valid) {
      const novoVeiculo = this.novoVeiculoForm.getRawValue() as NovoVeiculo;
      this.NovoVeiculoService.cadastraNovoVeiculo(novoVeiculo).subscribe(()=>{
        alert("Veículo cadastrado com sucesso!")
        this.router.navigate(['./dashboard'])
      },
      (error)=> {
        console.log(error);
      }
      )
    }

  }
}
