import { Injectable } from '@angular/core';


import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {FhaImmovable} from '../bo/FhaImmovable';

@Injectable()
export class FhaService {
  public fhaInmo: Observable<FhaImmovable[]>;

  constructor(private db: AngularFireDatabase) {
    this.fhaInmo = this.getFhaInmo('/fha/immovables');
  }

  getFhaInmo(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getFhaList() {
    this.fhaInmo = this.getFhaInmo('/fha/immovables');
    return this.fhaInmo;
  }
  // getClients() {
  //   this.clients = this.db.list('/clients');
  //   return this.clients;
  // }

  addInmoFha(fhaInmo: FhaImmovable) {
    this.db.list('/fha/immovables').push(fhaInmo);
  }
}
