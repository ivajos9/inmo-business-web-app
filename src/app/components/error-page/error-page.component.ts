import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})

export class ErrorPageComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Error, Pagina no encontrada';
  }

  ngOnInit() {
    console.log('Componente de error cargado.');
  }

}
