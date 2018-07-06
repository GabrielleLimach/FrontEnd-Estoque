import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MaterialComponent } from './components/material/material.component';
import { FormsModule } from '@angular/forms';
import { SolicitacoesComponent } from './components/solicitacoes/solicitacoes.component';
import { CompComponent } from './components/comp/comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    SolicitacoesComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
