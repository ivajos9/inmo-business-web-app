import { Component, OnInit } from '@angular/core';
import {Client} from '../bo/Client';
import {ClientsService} from '../services/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  title = 'Listado de clientes';

  clients: Client[];
  editState = false;
  clientToEdit: Client;

  constructor(public clientService: ClientsService) { }

  ngOnInit() {
      this.clientService.getClientsList().subscribe(clients => {
        this.clients = clients;
      });

  }

  deleteClient(event, task) {
    const response = confirm('Seguro que quieres eliminar a este Cliente?');
    if (response ) {
      this.clientService.deleteClient(task);
    }
    return;
  }

  editTask(event, client) {
    this.editState = !this.editState;
    this.clientToEdit = client;
  }

  updateTask(client) {
    this.clientService.updateClient(client);
    this.clientToEdit = null;
    this.editState = false;
  }

}
