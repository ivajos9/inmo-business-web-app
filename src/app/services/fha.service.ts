import { Injectable } from '@angular/core';


import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {FhaImmovable} from '../models/FhaImmovable';
import {Municipio} from '../models/Municipio';

@Injectable()
export class FhaService {
  public fhaInmo: Observable<FhaImmovable[]>;
  public municipios: Observable<Municipio[]>;

  constructor(private db: AngularFireDatabase) {
  }

  getListByPath(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getFhaList() {
    this.fhaInmo = this.getListByPath('/fha/immovables');
    return this.fhaInmo;
  }

  getMunicipiosList() {
    this.municipios = this.getListByPath('/fha/locations-fha');
    return this.municipios;
  }
}
