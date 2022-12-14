import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardaAutenticacaoGuard implements CanLoad {
  constructor(private UsuarioService:UsuarioService, private router:Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.UsuarioService.estaLogado()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
