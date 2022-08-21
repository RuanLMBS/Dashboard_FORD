import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuariomenu',
  templateUrl: './usuariomenu.component.html',
  styleUrls: ['./usuariomenu.component.css']
})
export class UsuariomenuComponent implements OnInit {

  mostraMenu = false;
  constructor() { }

  ngOnInit(): void {
  }

  abreMenu(){
    this.mostraMenu=!this.mostraMenu
  }
}
