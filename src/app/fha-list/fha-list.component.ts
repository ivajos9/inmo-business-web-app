import { Component, OnInit } from '@angular/core';
import {FhaService} from '../services/fha.service';
import {FhaImmovable} from '../bo/FhaImmovable';


@Component({
  selector: 'app-fha-list',
  templateUrl: './fha-list.component.html',
  // styleUrls: ['./fha-list.component.css']
})
export class FhaListComponent implements OnInit {
  title = 'Listado de FHA';

  fhaInmos: FhaImmovable[];
  fhaDisp: FhaImmovable[] = [];

  disponible = true;
  dispTitle = 'Mostrar No Disponibles';

  constructor(public fhaService: FhaService) { }

  ngOnInit() {
    this.fhaService.getFhaList().subscribe(fhaInmos => {
      this.fhaInmos = fhaInmos;

      for (const disp of fhaInmos) {
        if (disp.available) {
          this.fhaDisp.push(disp);
        }
      }
      console.log(this.fhaDisp);
    });
  }

  getDisponibles() {
    if (this.disponible) {
      this.disponible = false;
      this.dispTitle = 'Ocultar No Disponibles';
    }else{
      this.disponible = true;
      this.dispTitle = 'Mostrar No Disponibles';
    }
  }

}
