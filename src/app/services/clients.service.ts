import { Injectable } from '@angular/core';

import { Client } from '../models/Client';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientsService {
  public clients: Observable<Client[]>;

  constructor(private db: AngularFireDatabase) {
    this.clients = this.getClients('/clients');
  }

  getClients(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getClientsList() {
    this.clients = this.getClients('clients');
    return this.clients;
  }

  addClient(client: Client) {
    this.db.list('/clients/').push(client);
  }

  deleteClient(client: Client) {
    // this.clientDoc = this.afs.doc(`clients/${client.id}`);
    // this.clientDoc.delete();
  }

  updateClient(client: Client) {
    // this.clientDoc = this.afs.doc(`clients/${client.id}`);
    // this.clientDoc.update(client);
  }
}
