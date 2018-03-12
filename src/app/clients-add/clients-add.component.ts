import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {ClientsService} from '../services/clients.service';
import {Client} from '../bo/Client';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ClientsAddComponent implements OnInit {
  title = 'Datos del cliente';
  client: Client = {
    id: null,
    names: null,
    lastNames: null,
    email: null,
    mobilePhone: null,
    aditionalPhone: null,
    address: null,
    nit: null,
    birthDate: null,
    dpi: null,
  };

  constructor(private clientService: ClientsService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.client.names !== '' && this.client.lastNames !== '') {
      this.clientService.addClient(this.client);
      this.client.id = null;
      this.client.names = null;
      this.client.lastNames = null;
      this.client.email = null;
      this.client.mobilePhone = null;
      this.client.aditionalPhone = null;
      this.client.address = null;
      this.client.nit = null;
      this.client.birthDate = null;
      this.client.dpi = null;
      this._router.navigate(['/clients-list']);
    }
  }
}
