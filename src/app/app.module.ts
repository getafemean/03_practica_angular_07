import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ComprasComponent } from './compras/compras.component';
import { NavComponent } from './nav/nav.component';
import { ListadoClientesComponent } from './ventas/listado-clientes/listado-clientes.component';
import { CrearClienteComponent } from './ventas/crear-cliente/crear-cliente.component';
import { VisualizarClienteComponent } from './ventas/visualizar-cliente/visualizar-cliente.component';
import { LoadFadeDirective } from './load-fade.directive';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ComprasComponent,
    NavComponent,
    ListadoClientesComponent,
    CrearClienteComponent,
    VisualizarClienteComponent,
    LoadFadeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
