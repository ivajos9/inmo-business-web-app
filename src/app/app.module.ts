import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {APP_ROUTES} from './app.routing';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsAddComponent } from './components/clients-add/clients-add.component';
import { ClientsListComponent } from './components/clients-list/clients-list.component';
import { FhaListComponent } from './components/fha-list/fha-list.component';
import { FhaHistComponent } from './components/fha-hist/fha-hist.component';
import { ImmovablesListComponent } from './components/immovables-list/immovables-list.component';
import { ImmovablesAddComponent } from './components/immovables-add/immovables-add.component';
import { ImmovablesEditComponent } from './components/immovables-edit/immovables-edit.component';
import { RealizedSalesComponent } from './components/realized-sales/realized-sales.component';
import { QuotationAddComponent } from './components/quotation-add/quotation-add.component';
import { QuotationListComponent } from './components/quotation-list/quotation-list.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';

import {ClientsService} from './services/clients.service';
import {FhaService} from './services/fha.service';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NserviciosComponent } from './components/nservicios/nservicios.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InmoDetailComponent } from './components/inmo-detail/inmo-detail.component';
import { ProyectosAddComponent } from './components/proyectos-add/proyectos-add.component';
import { ProyectosListComponent } from './components/proyectos-list/proyectos-list.component';
import { DropfilesDirective } from './directives/dropfiles.directive';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import {AuthService} from './services/auth.service';


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
    ErrorPageComponent,
    NavbarComponent,
    ProyectosComponent,
    NserviciosComponent,
    ContactoComponent,
    InmoDetailComponent,
    ProyectosAddComponent,
    ProyectosListComponent,
    DropfilesDirective,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'inmobusinessgt'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    APP_ROUTES
  ],
  providers: [
    ClientsService,
    FhaService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
