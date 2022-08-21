import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  constructor(private servicoAutenticacao:AutenticacaoService, private router: Router) {}

 ngOnInit(): void {
 }

 usuario = ''
  senha = ''

 login() {
  this.servicoAutenticacao.autenticar(this.usuario, this.senha).subscribe(
    () => {
    this.router.navigate(['home']);
  },
  (error) => {
    alert('Usuário ou Senha Inválidos!');
    console.log(error);
   }
  )
}
}
