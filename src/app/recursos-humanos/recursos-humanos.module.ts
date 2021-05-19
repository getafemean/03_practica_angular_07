import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompartidoModule } from '../compartido/compartido.module';
import { RecursosHumanosRoutingModule } from './recursos-humanos-routing.module';
import { InicioRRHHComponent } from './inicio-rrhh/inicio-rrhh.component';

@NgModule({
  declarations: [
    InicioRRHHComponent
  ],
  imports: [
    CommonModule,
    RecursosHumanosRoutingModule,
    CompartidoModule
  ]
})

export class RecursosHumanosModule { }
