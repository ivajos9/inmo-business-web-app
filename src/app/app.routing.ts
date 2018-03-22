import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {HomeComponent} from './components/home/home.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {ClientsAddComponent} from './components/clients-add/clients-add.component';
import {ClientsListComponent} from './components/clients-list/clients-list.component';
import {FhaListComponent} from './components/fha-list/fha-list.component';
import {ImmovablesListComponent} from './components/immovables-list/immovables-list.component';
import {ProyectosComponent} from './components/proyectos/proyectos.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {NserviciosComponent} from './components/nservicios/nservicios.component';
import {ImmovablesAddComponent} from './components/immovables-add/immovables-add.component';
import {ProyectosAddComponent} from './components/proyectos-add/proyectos-add.component';


const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add-client', component: ClientsAddComponent},
  {path: 'clients-list', component: ClientsListComponent},
  {path: 'fha-list', component: FhaListComponent},
  {path: 'inmovables-list', component: ImmovablesListComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contactanos', component: ContactoComponent},
  {path: 'servicios', component: NserviciosComponent},
  {path: 'inmovables-add', component: ImmovablesAddComponent},
  {path: 'proyectos-add', component: ProyectosAddComponent},
  {path: '**', pathMatch: 'full', component: HomeComponent}



];

export const appRoutingProviders: any[] = [];
export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(ROUTES);
