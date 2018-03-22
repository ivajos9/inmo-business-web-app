import { Component, OnInit } from '@angular/core';
import {FileItem} from '../../models/FileItem';
import {Immovable} from '../../models/Immovable';

@Component({
  selector: 'app-immovables-add',
  templateUrl: './immovables-add.component.html',
  styleUrls: ['./immovables-add.component.css']
})
export class ImmovablesAddComponent implements OnInit {

  estaSobreDrop = false;
  archivos: FileItem[] = [];
  inmueble: Immovable = {
    code: null,
    available: null,
    consArea: null,
    address: null,
    environments: null,
    fieldArea: null,
    price: null ,
    propertyRegistry: null ,
    city: null ,
    country: null ,
    state: null,
    latitude: null,
    longitude: null,
    photosArr: null,
    type: null
  };
  constructor() { }

  ngOnInit() {
  }

}
