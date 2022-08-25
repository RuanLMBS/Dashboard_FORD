import { NovoVeiculoComponent } from './novo-veiculo.component'
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: NovoVeiculoComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'novoveiculo',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovoVeiculoRoutingModule { }
