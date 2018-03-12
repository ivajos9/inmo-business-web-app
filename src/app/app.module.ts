import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {routing, appRoutingProviders} from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { FhaListComponent } from './fha-list/fha-list.component';
import { FhaHistComponent } from './fha-hist/fha-hist.component';
import { ImmovablesListComponent } from './immovables-list/immovables-list.component';
import { ImmovablesAddComponent } from './immovables-add/immovables-add.component';
import { ImmovablesEditComponent } from './immovables-edit/immovables-edit.component';
import { RealizedSalesComponent } from './realized-sales/realized-sales.component';
import { QuotationAddComponent } from './quotation-add/quotation-add.component';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import {ErrorPageComponent} from './error-page/error-page.component';

import {ClientsService} from './services/clients.service';
import {FhaService} from './services/fha.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsAddComponent,
    ClientsListComponent,
    FhaListComponent,
    FhaHistComponent,
    ImmovablesListComponent,
    ImmovablesAddComponent,
    ImmovablesEditComponent,
    RealizedSalesComponent,
    QuotationAddComponent,
    QuotationListComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'inmobusinessgt'),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    ClientsService,
    FhaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
