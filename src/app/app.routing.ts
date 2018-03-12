import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// components
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ClientsAddComponent} from './clients-add/clients-add.component';
import {ClientsListComponent} from './clients-list/clients-list.component';
import {FhaListComponent} from './fha-list/fha-list.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'add-client', component: ClientsAddComponent},
  {path: 'clients-list', component: ClientsListComponent},
  {path: 'fha-list', component: FhaListComponent},
  {path: '**', component: ErrorPageComponent}



];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
